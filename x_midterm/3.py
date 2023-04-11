str = 'https://search.naver.com/search.naver?where=nexearch&ie=utf8&query=iot'

result = {}
a,b = str.split('?')
temp = b.split('&')
print(temp)


for i in range(3):
    a , b = temp[i].split("=")
    result[a] = b

print(result) 
