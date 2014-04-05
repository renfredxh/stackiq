
Mapping Step:
```
cat /Users/Renfred/Desktop/Data/stackoverflow.com-Posts | time python mapper.py > data.stream
```

Reducing step
```
time cat data.stream | sort -k1,1 | python reducer.py
```
