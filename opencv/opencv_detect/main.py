import cv2 
import numpy as np 
from matplotlib import pyplot as plt

image = cv2.imread('test3.jpg')




img1=cv2.resize(image,(800,600))
work_image = np.copy(img1)
gray_image = cv2.cvtColor(work_image,cv2.COLOR_RGB2GRAY)


blur_image= cv2.GaussianBlur(gray_image,(5,5),0)

canny_image = cv2.Canny(blur_image,1,40)

#test = gray_image - blur_image

cv2.imshow("myimage",canny_image)
#plt.imshow(image)
#plt.imshow(canny_image)
#plt.xticks([]), plt.yticks([])  # for remove x and y
plt.show()
cv2.waitKey(0)
