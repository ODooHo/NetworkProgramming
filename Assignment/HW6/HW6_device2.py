from socket import *
import os
import random
BUF_SIZE = 1024
LENGTH = 4 # '파일 크기': 4바이트
sock = socket(AF_INET, SOCK_STREAM)
sock.bind(('', 3334))
sock.listen(10)
print('Device2 Activated..')


conn, addr = sock.accept()
while True:
    msg = conn.recv(BUF_SIZE).decode()
    if msg == "quit":
        print("bye")
        break
    elif msg == "2":
        heartbeat = random.randint(40,140)
        step = random.randint(2000,6000)
        cal = random.randint(1000,4000)
        result = f"Heartbeat={heartbeat}, Steps={step}, Cal={cal}"
        print(result)
        conn.send(result.encode())
    
