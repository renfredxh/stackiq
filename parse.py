import re
from html2text import html2text
from bs4 import BeautifulSoup, SoupStrainer

class Post(object):
    def __init__(self, xml):
        self.body =  html2text(xml.get('body'))
        self.title = xml.get('title')
        self.score = int(xml.get('score'))

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
        self.answercount = int(xml.get('answercount'))
        self.favoritecount = int(xml.get('favoritecount'))
        self.tags = self.get_tags(xml.get('tags'))
        self.viewcount = int(xml.get('viewcount'))

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
        return self.score/float(self.viewcount)

    def serialize(self):
        return {
            'score': self.score,
            'scores_to_views': self.get_scores_to_views(),
        }

only_row_tags = SoupStrainer("row")

posts = []
DATA = "/Users/Renfred/Desktop/Data/stackoverflow.com-Posts"

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
                if lang:
                    print("{}\t{}".format(lang, post.serialize()))
            #posts.append(post)
            i += 1
            if i == 30:
                break

main()
