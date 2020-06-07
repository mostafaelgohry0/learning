
import numpy as np
import cv2

cap=cv2.VideoCapture('/home/elgohryeng/Downloads/z.mp4')

while (True):
    ret ,frame=cap.read()
    #ret=cap.set(4,240)
    #gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    cv2.imshow('frame',frame)
    if cv2.waitKey(1)&0xFF==ord('q'):
        break



cap.release()
cv2.destroyAllWindows()
