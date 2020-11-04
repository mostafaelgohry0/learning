import cv2 
import numpy as np
from   matplotlib import pyplot as plt
'''
#-----------------------Morphological Transformation
img =cv2.imread('mostafa.jpg',0)
img = cv2.resize(img ,(500,500))
kernal = np.ones((15,15),np.uint8)
erosion = cv2.erode(img,kernal,iterations=1)
dilation = cv2.dilate(img,kernal,iterations=1)

openning = cv2.morphologyEx(img,cv2.MORPH_OPEN,kernal)
clossing = cv2.morphologyEx(img,cv2.MORPH_CLOSE,kernal)
gradient = cv2.morphologyEx(img,cv2.MORPH_GRADIENT,kernal)


plt.imshow(img)
plt.show()
plt.imshow(erosion)
plt.show()

cv2.imshow('test',img)
cv2.imshow("erosion",erosion)
cv2.imshow("dilate",dilation)
cv2.imshow("openning",openning)
cv2.imshow("clossing",clossing)
cv2.imshow("gradient",gradient)
cv2.waitKey(0)
'''

#-------------- Geometric Transformation

img2 = cv2.imread('mostafa.jpg')
w,h = img2.shape[:2]
print w ,h 
img2 = cv2.resize(img2,(300,400))
cubic = cv2.resize(img2,(300,400),interpolation = cv2.INTER_AREA)

m = np.float32([[1,0,100],[0,1,500]])
translate = cv2.warpAffine(img2,m,(w,h))
#print img2 
print img2.shape
print img2.size


cv2.imshow("translate",translate)
cv2.imshow("mostafa",img2)
cv2.waitKey(0)