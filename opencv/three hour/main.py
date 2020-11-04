import cv2
import numpy  as np

print("hi from ")

def readImage():

	img = cv2.imread("mostafa.jpg");
	cv2.imshow("mostafa",img);
	cv2.waitKey(0);
	#print(img)



def readVideo():
	cap = cv2.VideoCapture("v.mp4");
	cap.set(4,240);
	cap.set(3,340)
	while (True):
		ret,frame = cap.read();
		if ret == True:

			cv2.imshow("frame",frame)
			if cv2.waitKey(1)&0xFF==ord('q'):
				break
		else:
			break	


#record video from cam 				
	
def recordvideo():
	cap = cv2.VideoCapture(0);
	cap.set(4,240);
	cap.set(3,340);
	
	while (True):
		ret,frame = cap.read();
		if ret == True:

			cv2.imshow("frame",frame)
			if cv2.waitKey(1)&0xFF==ord('q'):
				break
		else:
			break		

	
#readImage();

#readVideo();

recordvideo();
