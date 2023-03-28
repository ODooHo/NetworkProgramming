from socket import *
s = socket()
s.bind(('', 80))
s.listen(10)
while True:
    c, addr = s.accept()

    data = c.recv(1024)
    msg = data.decode()
    req = msg.split('\r\n')
    #파싱해서 파일 이름만 빼온 뒤
    a = req[0].split(" ")
    a = a[1]
    a = a[1:]
    if a == "index.html":
        f = open(a,'r',encoding='utf-8')
        mimeType = 'text/html'
        temp = 'Content-Type: ' + mimeType + '\r\n'
        c.send(b'HTTP/1.1 200 OK\r\n')
        c.send(temp.encode())
        c.send(b'\r\n')
        data = f.read()
        c.send(data.encode('euc-kr'))
        c.close()
    elif a == "iot.png":
        f = open(a,'rb')
        mimeType = 'image/png'
        temp = 'Content-Type: ' + mimeType + '\r\n'
        c.send(b'HTTP/1.1 200 OK\r\n')
        c.send(temp.encode())
        c.send(b'\r\n')
        data = f.read()
        c.send(data)
        c.close()
    elif a == "favicon.ico":
        f = open(a,'rb')
        mimeType = 'image/x-icon'
        temp = 'Content-Type: ' + mimeType + '\r\n'
        c.send(b'HTTP/1.1 200 OK\r\n')
        c.send(temp.encode())
        c.send(b'\r\n')
        data = f.read()
        c.send(data)
        c.close()
    else:
        c.send(b'HTTP/1.1 404 Not Found\r\n')
        c.send(b'\r\n')
        c.send(b'<HTML><HEAD><TITLE>Not Found</TITLE></HEAD>')
        c.send(b'<BODY>Not Found</BODY></HTML>')
        c.close()

s.close()
    

"""     if():#파일 존재 

    else:
        c.send(b'HTTP/1.1 404 Not Found\r\n')
        c.send(b'\r\n')
        c.send(b'<HTML><HEAD><TITLE>Not Found</TITLE></HEAD>')
        c.send(b'<BODY>Not Found</BODY></HTML>')
         """



# 웹 서버 코드 작성
# 각 객체(파일 또는 문자열) 전송 후, 소켓 닫기(c.close())``