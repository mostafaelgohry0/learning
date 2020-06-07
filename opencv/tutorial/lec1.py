import cv2 
#import numpy as np 

from  matplotlib  import pyplot as plt 
myimg = cv2.imread('mostafa.jpg')
#myimg[:,:,2]=0
#myimg[:,:,1]=0

blur =cv2.blur(myimg,(10,2))
cv2.imshow("test",blur)
plt.imshow(myimg)
plt.show()
cv2.waitKey(4000)

'''
# vedio 
cap = cv2.VideoCapture('v.mp4')

while (cap.isOpened()):
    ret,frame = cap.read()
    gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
    cv2.imshow('frame',frame)
    if  cv2.waitKey(100)& 0xFF == ord('q'):
        break
cap.release()

# web cam 
cap = cv2.VideoCapture(0)

while (True):
    ret,frame = cap.read()
    gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
    cv2.imshow('frame',gray)
    if  cv2.waitKey(100)& 0xFF == ord('q'):
        break
cap.release()
'''
