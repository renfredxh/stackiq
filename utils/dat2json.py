#!/usr/bin/python
import json
import sys
"""This utility takes the dat files generated by mapper.py/reducer.py
and converts them into a json format.

Use: dat2json.py source_file.dat dest_file.json
"""

source_file = sys.argv[1]
dest_file = sys.argv[2]

data = {}

with open(source_file) as f:
    for line in f:
        line.strip()
        lang, metadata = line.split('\t', 1)
        data[lang] = json.loads(metadata)

with open(dest_file, 'w') as f:
    f.write(json.dumps(data, indent=2))
