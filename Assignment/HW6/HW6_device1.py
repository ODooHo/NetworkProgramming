from socket import *
import os
import random
BUF_SIZE = 1024
LENGTH = 4 # '파일 크기': 4바이트
sock = socket(AF_INET, SOCK_STREAM)
sock.bind(('', 3333))
sock.listen(10)
print('Device1 Activated..')

temperature = 0
humid = 0
bright = 0
conn, addr = sock.accept()
while True:
    msg = conn.recv(BUF_SIZE).decode()
    if msg == "quit":
        print("bye")
        break
    elif msg == "1":
        temperature = random.randint(0,40)
        humid = random.randint(0,100)
        bright = random.randint(70,150)
        result = f"Temp={temperature}, Humid={humid}, lilum={bright}"
        print(result)
        conn.send(result.encode())
    
