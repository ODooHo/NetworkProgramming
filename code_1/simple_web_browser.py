from socket import *
sock = socket(AF_INET, SOCK_STREAM)
sock.connect(('www.google.com', 80))
sock.send(b'GET / HTTP/1.1\r\n')
sock.send(b'Host: www.google.com')
data = sock.recv(10000)
print(data.decode())
sock.close()