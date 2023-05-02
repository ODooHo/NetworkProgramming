from socket import *

port = 6666
BUFFSIZE = 1024

sock = socket(AF_INET, SOCK_DGRAM)
sock.bind(('',port))

message = [[]for _ in range(100)]
while True:
    data, addr = sock.recvfrom(BUFFSIZE)
    temp = data.decode()
    if temp == 'quit':
        break
    a , b = temp.split(" ",1) #공백 2개까지만 나누고 나머지는 그냥 처리
    if a == 'send':
        b,c = b.split(" ",1)
        index = int(b)-1
        message[index].append(c)
        sock.sendto("Ok".encode(),addr)
    elif a == 'receive':
        index = int(b)-1
        if message[index]:
            rem = message[index][0]
            sock.sendto(rem.encode(),addr)
            message[index].pop(0)
        else:
            sock.sendto("No messages".encode(),addr)
