
import cv2
import numpy as np
#img = np.zeros((255,255,255),np.uint8)

def draw_points(event,x,y,flag,param):
    
    #if event ==  cv2.EVENT_MOUSEMOVE:
    if event == cv2.EVENT_LBUTTONDBLCLK:
        #cv2.circle(img,(x,y),50,(255,255,255),-1)
        cv2.rectangle(img,(0,0),(60,60),(20,14,149),-1)
img = np.zeros((40,400,3), np.uint8)
cv2.namedWindow('img')
cv2.setMouseCallback('img',draw_points)

while(1):   
    cv2.imshow('img',img)
    if cv2.waitKey(20)== 27:
        break

cv2.destroyAllWindows()
