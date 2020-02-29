## Rest Protocol
Note that you can learn more of this in CSCC09 - Programming on the Web offered in Winter.

### Lab information
To run your server:
```
$ mvn exec:java
```
More detailed instructions in the assignment 1 handout.


### Testing your API
I recommend [Postman](https://www.getpostman.com/) to test very quickly.
For the purposes of this lab, Python is more than enough.

1. On lab computers, you need to create a python virtual environment before installing the requests package.
```
$ virtualenv c01 --python=python3
$ source c01/bin/activate
```

2. Install the `requests` package for Python:
```
$ pip3 install requests
```

3. Open the python console
```
$ python3
>>> import requests
>>> res = requests.get('http://localhost:8080/api/addTwoNumbers', json={'firstNumber': 1, 'secondNumber': 2})
>>> res.content
b'3\n'
>>> res.status_code
200
```
#### Test code for tutorial
You can use this file to test your API. This implements the basic cases in the handout.
Do check with more advance cases on your own though.
```python
import requests
res1 = requests.get('http://localhost:8080/api/addTwoNumbers', json={'firstNumber': 7, 'secondNumber': 3})
assert 10 == res1.json()
assert 200 == res1.status_code
res2 = requests.get('http://localhost:8080/api/subTwoNumbers', json={'firstNumber': 7, 'secondNumber': 3})
assert 4 == res2.json()
assert 200 == res2.status_code
res3 = requests.post('http://localhost:8080/api/addTwoNumbers', json={'firstNumber': 10, 'secondNumber': 8})
assert 200 == res3.status_code
res4 = requests.get('http://localhost:8080/api/addTwoNumbers', json={'firstNumber': 7})
assert res4.json() == 25
```
