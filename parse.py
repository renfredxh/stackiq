import re
from pprint import pprint
from html2text import html2text
from bs4 import BeautifulSoup, SoupStrainer
from readability_score.calculators import ari, colemanliau, fleschkincaid, smog

class Post(object):

    def __init__(self, xml):
        self.body =  html2text(xml.get('body'))
        self.title = xml.get('title')
        self.score = int(xml.get('score'))

    def get_linguistics_data(self):
        # Strip out blocks of code to get a fair assesment on reading level
        code_block_pattern = r'(\n((( {4}|\t).*\n)|\n)*(( {4}|\t).*))?'
        text = re.sub(code_block_pattern, '', self.body)
        text = text.encode('ascii', 'ignore')
        scorers = {
            ari.ARI,
            colemanliau.ColemanLiau,
            fleschkincaid.FleschKincaid,
            smog.SMOG
        }

        grades, min_ages = [], []
        for scorer in scorers:
            text_metadata = scorer(text, locale='en_US')
            grades.append(text_metadata.us_grade)
            min_ages.append(text_metadata.min_age)

        grade, min_age = avg(grades), avg(min_ages)
        return {
            'min_age': min_age,
            'reading_level': grade,
            'word_count': text_metadata.scores['word_count']
        }

    def __str__(self):
        return str(self.__dict__)


class Answer(Post):
    def __init__(self, xml):
        super(Answer, self).__init__(xml)
        self.post_type = 'answer'

class Question(Post):
    def __init__(self, xml):
        super(Question, self).__init__(xml)
        self.post_type = 'question'
        self.answer_count = int(xml.get('answercount'))
        self.favorite_count = int((xml.get('favoritecount') or 0))
        self.tags = self.get_tags(xml.get('tags'))
        self.view_count = int(xml.get('viewcount'))

    def get_tags(self, tags):
        # Find all tags in the raw string, seperate them and strip
        # them of their angle brackets (i.e. <python>)
        t = re.findall(r'(?<=\<)[^\>]+(?=\>)', tags)
        return set(t)

    def get_lang(self):
        LANGS = {
            "C#", "Java", "Javascript", "PHP", "Python", "C++", ".NET",
            "HTML/CSS", "HTML", "CSS",  "Objective-C", "C", "Ruby", "Perl", "Delphi",
            "Scala", "Haskell", "Lisp"
        }
        # Lowercase langs for simplicity
        LANGS = [l.lower() for l in LANGS]
        # Return the primary language for this question
        for tag in self.tags:
            if tag in LANGS:
                return tag

    def get_scores_to_views(self):
        # Return ratio of total score of questions vs views of questions
        return self.score/float(self.view_count)

    def serialize(self):
        return {
            'score': self.score,
            'anwser_count': self.answer_count,
            'view_count': self.view_count,
            'favorite_count': self.favorite_count,
            'scores_to_views': self.get_scores_to_views(),
            'lingustics_data': self.get_linguistics_data()
        }

only_row_tags = SoupStrainer("row")

posts = []
DATA = "/Users/Renfred/Desktop/Data/stackoverflow.com-Posts"

def avg(xs):
    """Return the average of a list"""
    return sum(xs)/len(xs)

def main():
    with open(DATA) as infile:
        i = 0
        post = None
        for line in infile:
            soup = BeautifulSoup(line, parse_only=only_row_tags)
            if soup.row:
                post_type = int(soup.row.get('posttypeid'))
                post_class = {
                    1: Question,
                    2: Answer
                }[post_type]
                post = post_class(soup.row)
            else:
                continue
            if post.post_type == 'question':
                # If a post is tagged with one of the popular languages, add
                # it to the data set.
                lang = post.get_lang()
                lang = 'html/css' if lang in ['html', 'css'] else lang
                if lang:
                    print("{}\t{}\n".format(lang, post.serialize()))
            posts.append(post)
            i += 1
            if i == 500:
                break

main()
