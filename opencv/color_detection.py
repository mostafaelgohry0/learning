import numpy as np
import cv2

f= [i for i in dir(cv2) if i.startswith('COLOR_')]
for x in f:
    print (x)

cap = cv2.VideoCapture(0)
while (1):
    ret, frame = cap.read()
    hsv = cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)  # convert BRG TO HSV
    #define the color searching range
    lower_color_range = np.array([90, 90 ,90])
    higher_color_range = np.array([240,240,234])

    mask = cv2.inRange(hsv,lower_color_range,higher_color_range)

    output = cv2.bitwise_and(frame,frame, mask=mask)

    cv2.imshow("frame",frame)
    cv2.imshow("color_range",mask)
    cv2.imshow("output",output)

    k=cv2.waitKey(50) & 0xFF
    if k == 27 :
        break



cv2.destroyAllWindows()

'''

import numpy as np
import cv2
from matplotlib import pyplot as plt
img = cv2.imread('test90.jpg')
b,g,r = cv2.split(img) # get b,g,r
img = cv2.merge([r,g,b]) # switch it to RGB

plt.imshow(img)
plt.xticks([]), plt.yticks([]) # to hide tick values on X and Y axis
plt.show()

print img[23][44] 
'''



