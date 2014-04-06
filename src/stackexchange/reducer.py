import json
import sys

def accumulate_data(data1, data2):
    for k in data1:
        if k == 'count':
            continue
        elif isinstance(data1[k], dict):
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

def compute_composites(data):
    # Compute composite intellegence score for a community based on lingustic
    # analysis
    data['composite_intellegence'] = data['min_age'] ** 1.5 + 10 * data['reading_level']
    return data

def post_process(data):
    data = average_data(data, data['count'])
    data = compute_composites(data)
    return data

current_count = 0
questions_unanswered = 0
current_data = None

for line in sys.stdin:
    line = line.strip()
    if '\t' not in line:
        continue
    lang, data = line.split('\t', 1)
    # Convert serialized data string to json ('sort -k1,1')
    data = json.loads(data)
    current_data = current_data or data

    current_data = accumulate_data(current_data, data)
    current_data['count'] = current_data.get('count', 0) + 1

current_data = post_process(current_data)
print(json.dumps(current_data))

