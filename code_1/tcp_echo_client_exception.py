from socket import *
port = int(input("Port No: ")) 
address = ("localhost", port) 
print(address)
BUFSIZE = 1024
s = socket(AF_INET,SOCK_STREAM) 
s.connect(address)
while True:
    msg = input("Message to send: ") 
    try:
        temp = s.send(msg.encode())
    except:
        print('connection closed')
        break
    else:
        print("{} bytes send".format(temp))
    
    try:
        data = s.recv(BUFSIZE) #receive message from server 
    except:
        print('connection closed')
    else:
        if not data:
            break
    print("Received message: %s" %data.decode())
    
s.close()