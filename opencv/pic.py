import numpy as np
import cv2
#from matplotlib import pyplot as plt

img = cv2.imread('mostafa.jpg',1)

blur = cv2.blur(img,(10,10))

print (img)
print (blur)


#                drawing shaps
cv2.line(img,(10,0),(511,300),(123,223,215),6)   # line
cv2.rectangle(img,(430,430),(600,600),(12,23,23),8)  # rectangle
cv2.circle(img,(500,500),300,(0,0,255),5)  #circle
#font = cv2_FONT_HERSHEY_SIMPLEX
cv2.putText(img,'mostafa',(400,200),0,3,(233,45,245),2)



def draw_circle(event,x,y,flags,param):
    if event == cv2.EVENT_LBUTTONDBLCLK:
        cv2.circle(img,(x,y),100,(255,255,255),-1)
# Create a black image, a window and bind the function to window
#img = np.zeros((512,512,3), np.uint8)
cv2.namedWindow('img')
cv2.setMouseCallback('img',draw_circle)

while(1):
    cv2.imshow('img',img)
    if cv2.waitKey(20) == 27:
        break

#cv2.imshow('mostafa',img)
cv2.imwrite('pic2.png',img)
#k=cv2.waitKey(0)       # to show image

#if k==ord('p'):
#    print "pppppp"
#print k

cv2.destroyAllWindows()




#invert color from B,G,R to R,G,B
b,g,r = cv2.split(img)  # get b,g,r
img = cv2.merge([r,g,b]) # switch it to RGB


#plt.imshow(img,cmap = 'gray')
#plt.xticks([]), plt.yticks([])  # for remove x and y
#plt.show()
