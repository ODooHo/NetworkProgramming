from socket import *
s = socket(AF_INET, SOCK_STREAM)
s.bind(('', 3333))
s.listen(5)
print('waiting...')
while True:
    client, addr = s.accept()
    print('connection from ', addr)
    while True:
        data = client.recv(1024)
        if not data:
            break
        temp = data.decode()
        if '+' in temp:
            temp = temp.split('+')
            a,b = temp
            result = str(int(a)+int(b))
            client.send(result.encode())
        elif '-' in temp:
            temp = temp.split('-')
            a,b = temp
            result = str(int(a)-int(b))
            client.send(result.encode())
        elif '*' in temp:
            temp = temp.split('*')
            a,b = temp
            result = str(int(a)*int(b))
            client.send(result.encode())
        elif '/' in temp:
            temp = temp.split('/')
            a,b = temp
            t = round(int(a)/int(b),1)
            result = str(t)
            client.send(result.encode())

    client.close()
