import socket
import struct
import binascii

class Udphdr:
    def __init__(self,sport,rport,tot_len,checksum):
        self.sport = sport
        self.rport = rport
        self.tot_len = tot_len
        self.checksum = checksum

    def pack_Udphdr(self):
        packed = b''
        packed += struct.pack('!HHHH',self.sport,self.rport,self.tot_len,self.checksum)

        return packed
    
def unpack_Udphdr(buffer):
    unpacked = struct.unpack('!HHHH',buffer)
    return unpacked

def getSrcPort(unpacked_udphdr):
    return unpacked_udphdr[0]
    
def getDstPort(unpacked_udphdr):
    return unpacked_udphdr[1]
    
def getLength(unpacked_udphdr):
    return unpacked_udphdr[2]
    
def getChecksum(unpacked_udphdr):
    return unpacked_udphdr[3]




udp = Udphdr(5555,80,1000,0xFFFF)
packed_udphdr = udp.pack_Udphdr()
print(binascii.b2a_hex(packed_udphdr))

unpack_udphdr = unpack_Udphdr(packed_udphdr)
print(unpack_udphdr)
print('Source Port:{}, Destination Port:{}, Length:{}, Checksum:{}'\
      .format(getSrcPort(unpack_udphdr),getDstPort(unpack_udphdr),getLength(unpack_udphdr),getChecksum(unpack_udphdr)))