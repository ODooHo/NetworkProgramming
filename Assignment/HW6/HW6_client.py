from socket import *
import time
s1 = socket(AF_INET, SOCK_STREAM)
s2 = socket(AF_INET, SOCK_STREAM)
addr1 = ('localhost',3333)
addr2 = ('localhost',3334)

s1.connect(addr1)
s2.connect(addr2)

f = open("data.txt",'a')
while True:
    msg = input('Choose device:')
    if msg == 'quit':
        s1.send(msg.encode())
        s2.send(msg.encode())
        break
    elif msg == '1':
        s1.send(msg.encode())
        temp = time.ctime(time.time())
        temp = temp + " Device1 :"
        data = s1.recv(1024).decode()
        if not data:
            break
        result = temp + data + "\n"
        print(result)
        f.write(result)
        #받은 후에 data.txt에 받은 시각, 데이터 값 함께 저장
    elif msg == '2':
        s2.send(msg.encode())
        temp = time.ctime(time.time())
        temp = temp + "Device2 :"
        data = s2.recv(1024).decode()
        if not data:
            break
        result = temp + data + "\n"
        print(result)
        f.write(result)
    else:
        print("Wrong request!")
        continue
f.close()
s1.close()
s2.close()