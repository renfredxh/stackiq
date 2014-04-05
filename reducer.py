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
            data[k] = data[k]/total
    return data

current_lang = None
current_count = 0
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
    else:
        if current_lang:
            current_data = average_data(current_data, current_data['count'])
            # Print the reduced data set
            print("{}\t{}".format(current_lang, json.dumps(current_data)))
        current_data = data
        current_lang = lang

# do not forget to output the last word if needed!
if current_lang == lang:
    current_data = average_data(current_data, current_data['count'])
    print("{}\t{}".format(current_lang, json.dumps(current_data)))
