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
    

    if():#파일 존재 
        c.send(b'HTTP/1.1 200 OK\r\n')
        c.send(b'Content-Type: ' + mimeType + '\r\n')
        c.send(b'\r\n')
        ~~
    else:
        c.send(b'HTTP/1.1 404 Not Found\r\n')
        c.send(b'\r\n')
        c.send(b'<HTML><HEAD><TITLE>Not Found</TITLE></HEAD>')
        c.send(b'<BODY>Not Found</BODY></HTML>')
        



# 웹 서버 코드 작성
# 각 객체(파일 또는 문자열) 전송 후, 소켓 닫기(c.close())