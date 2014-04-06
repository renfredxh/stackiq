import re
import yaml
import json
import sys
from datetime import datetime
from html2text import html2text
from bs4 import BeautifulSoup, SoupStrainer
from readability_score.calculators import ari, colemanliau, fleschkincaid, smog

class Post(object):

    def __init__(self, xml):
        self.body =  html2text(xml.get('body'))

    def get_linguistics_data(self):
        # Strip out blocks of code to get a fair assesment on reading level
        text = self.body.encode('ascii', 'ignore')
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

    def serialize(self):
        return self.get_linguistics_data()

only_row_tags = SoupStrainer("row")

posts = []

def avg(xs):
    """Return the average of a list"""
    return sum(xs)/len(xs)

def log(data_size, lang_count, post_count):
    with open('stats.log', 'a') as f:
        f.write("Entities Processed: {} ".format(post_count))
        f.write("MBs Read: {0:.2f} ".format(data_size/float(1000*1000)))
        f.write("Time Elapsed: {}\n".format((datetime.now() - START_TIME).seconds))

def main():
    post_count = 0
    post = None
    lang_count = {}
    data_size = 0
    last_log = datetime.now()
    for line in sys.stdin:
        try:
            data_size += sys.getsizeof(line)
            soup = BeautifulSoup(line, parse_only=only_row_tags)
            if soup.row:
                post = Post(soup.row)
            else:
                continue
            print("{}\t{}".format('cooking', json.dumps(post.serialize())))
        except Exception as e:
            with open('error.log', 'a') as f:
                f.write("ERROR: {}".format(str(e)))
        # Log every 30 seconds
        if (datetime.now() - last_log).seconds > 30:
            log(data_size, lang_count, post_count)
            last_log = datetime.now()
        post_count += 1

if __name__ == '__main__':
    # Load in the settings
    START_TIME = datetime.now()
    main()

