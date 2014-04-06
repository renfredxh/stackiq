import json
import sys

def accumulate_data(data1, data2):
    for k in data1:
        if k == 'count':
            continue
        if isinstance(data1[k], dict):
            data1[k] = accumulate_data(data1[k], data2[k])
        else:
            data1[k] += data2[k]
    return data1

def average_data(data, total):
    for k in data:
        if k == 'count':
            continue
        if isinstance(data[k], dict):
            data[k] = average_data(data[k], total)
        else:
            data[k] = data[k]/float(total)
    return data

def compute_composites(data):
    # Compute composite intellegence score for a community based on lingustic
    # analysis
    data['composite_intellegence'] = data['linguistics_data']['min_age'] ** 1.5 + 10 * data['linguistics_data']['reading_level']
    # Compute composite community score for language based on activity
    # statistics

    data['composite_community'] = ((((data['answer_count'] * 1000 + data['view_count'] + 
        data['score'] * 5000) / 1000) - ((data['percentage_answered'] - 99) *
            100)) - 9900) * 10
    return data

def post_process(data):
    data['percentage_answered'] = 100 - (questions_unanswered / float(data['count'])) * 100
    data = average_data(data, data['count'])
    data = compute_composites(data)
    return data

current_lang = None
current_count = 0
questions_unanswered = 0
word = None

for line in sys.stdin:
    line = line.strip()
    if '\t' not in line:
        continue
    lang, data = line.split('\t', 1)
    # Convert serialized data string to json ('sort -k1,1')
    data = json.loads(data)

    # Only works if sorted
    if current_lang == lang:
        current_data = accumulate_data(current_data, data)
        current_data['count'] = current_data.get('count', 0) + 1
        # Keep track of unanswered questions
        if data['answer_count'] == 0:
            questions_unanswered += 1
    else:
        if current_lang:
            current_data = post_process(current_data)
            # Print the reduced data set
            print("{}\t{}".format(current_lang, json.dumps(current_data)))
            questions_unanswered = 0
        current_data = data
        current_lang = lang

# do not forget to output the last word if needed!
if current_lang == lang:
    current_data = post_process(current_data)
    print("{}\t{}".format(current_lang, json.dumps(current_data)))
