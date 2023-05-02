from socket import *
import random

port = 2500
BUFFSIZE = 1024


sock = socket(AF_INET,SOCK_DGRAM)
sock.bind(('',port))

while True:
    msg,addr = sock.recvfrom(BUFFSIZE)
    if random.randint(1,10) <=4:
        print('Packet from {} lost!'.format(addr))
        continue
    print("Received: ",msg.decode())

    sock.sendto(msg,addr)