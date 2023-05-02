import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
addr = ('localhost', 9000)
sock.connect(addr)
msg = sock.recv(1024)
print(msg.decode())
sock.send(b'Dooho O')
result = sock.recv(1024)
print(result.decode())
# print(int.from_bytes(result,'big'))
sock.close()