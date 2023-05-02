import socket

def relay_server():
    # 릴레이 서버 소켓 생성 및 바인딩
    relay_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    relay_socket.bind(('localhost', 9000))
    relay_socket.listen(1)

    # 브라우저로부터의 요청 대기
    while True:
        browser_conn, browser_addr = relay_socket.accept()
        browser_data = browser_conn.recv(1024)

        # 브라우저로부터의 요청을 파싱하여 호스트와 경로 추출
        request_lines = browser_data.decode().split('\r\n')
        host_line = [request_lines[1]]
        print(host_line)
        host = 'www.daum.net'

        # 만약 호스트가 'localhost:9000'일 경우 'www.daum.net'으로 변경
        #if host == 'localhost:9000':
        #   host = 'www.daum.net'

        # 외부 서버로의 연결 생성
        server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        server_socket.connect((host, 80))


        # 브라우저로부터 수신한 요청 라인과 Host 헤더만을 외부 서버에 전송
        request_line = f'GET / HTTP/1.1\r\n'
        host_header = f'Host: {host}\r\n\r\n'
        server_socket.sendall(request_line.encode() + host_header.encode()) #여기부터 다시(안됨)

        # 외부 서버로부터의 응답 수신 및 브라우저로 전송
        server_data = server_socket.recv(1024)
        while server_data:
            browser_conn.send(server_data)
            server_data = server_socket.recv(1024)

        # 소켓 종료
        server_socket.close()
        browser_conn.close()

if __name__ == '__main__':
    relay_server()
