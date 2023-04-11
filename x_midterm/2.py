lst = ['H','e','l','l','o',',',' ','I','o','T']
lst.append('!')
print(lst)
lst.remove('o')
print(lst)
lst.insert(4,'a')
print(lst)
print(str(lst))
result = ''.join(map(str, lst)) #리스트 -> 문자열 변환
print(result)
lst.sort(reverse=True)
print(lst)