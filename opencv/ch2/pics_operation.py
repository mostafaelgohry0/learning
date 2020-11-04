import numpy as np
import cv2

myimg=cv2.imread('g.jpg')

# to read any pixel in the picture 

px=myimg[20,70]
print px
print myimg.size
myimg.itemset((20,70,1),90)
print px 
print myimg.shape
print myimg.size

copied_img=np.zeros((200,200,3),np.uint8)
part = myimg [50:250,500:700]
copied_img[0:200,0:200] = part


img1=cv2.imread('mostafa.jpg')
img = cv2.imread('g.jpg',1)
img1=cv2.resize(img1,(600,600))
img=cv2.resize(img,(600,600))
add=cv2.addWeighted(img1,.3,img,.2,0)
'''
img[340,400]=[0,0,0]
px=img.item(300,50,1)
for i in range (0,10):
    for j in range (0,10):
        img[i,j]=[0,0,0]




part = img[60:200,200:300]
img[200:340,200:300] =part


p=mynew_img[460,632]


print p
print mynew_img.shape
#print mynew_img.size
#print mynew_img.dtype
'''


while(1):
    cv2.imshow("me",myimg)
    cv2.imshow("me2",copied_img)
    cv2.imshow("adding",add)
    #cv2.imshow("mypic",img)
    
    if cv2.waitKey(0) ==27:
        break
    
cv2.destroyAllWindows()

    
