from socket import *

port = 2500
BUFFSIZE = 1024
sock = socket(AF_INET,SOCK_DGRAM)
sock.connect(('localhost',port))

time = 1
counter = 0
while True:
    msg = input('Enter a message: ')
    if msg == 'q':
        break
    while True:
        sock.send(msg.encode())
        sock.settimeout(time)
        try:
            data, addr = sock.recvfrom(BUFFSIZE)
        except timeout:
            counter+=1
            if counter > 3:
                print("loss")
                counter = 0
                break
        else:
            print('ServerSays',data.decode())
            break
            

sock.close()