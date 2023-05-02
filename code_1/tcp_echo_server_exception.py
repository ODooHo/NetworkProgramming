from socket import *

port = 8888
sock = socket(AF_INET,SOCK_STREAM)
sock.bind(('',port))
sock.listen(10)
conn, (remotehost, remoteport) = sock.accept() 
print('connected by', remotehost, remoteport)
while True:
    try:
        data = conn.recv(1024)
    except:
        break
    if not data:
        break
    print("Received message: ",data.decode())
    try:
        conn.send(data)
    except:
        break
conn.close()