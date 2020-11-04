from PyQt4.QtCore import *
from PyQt4.QtGui  import *
import sys

import numpy as np
import cv2




myapp=QApplication(sys.argv)    # create application
main_gui= QWidget()    # main window

main_gui.setWindowTitle("vision")     #  set title






                      #  create   button
vedioBtn=QPushButton("vedio",main_gui)
vedioBtn.setGeometry(100,150,100,50)
vedioBtn.setToolTip("click to run vedio ")
#vedioBtn.clicked.connect(run_vedio)

recordVedioBtn=QPushButton("record vedio",main_gui)
recordVedioBtn.setGeometry(300,150,100,50)
recordVedioBtn.setToolTip("click to draw record vedio")

                      #  create  exit  button
exitBtn=QPushButton("Exit ",main_gui)
exitBtn.setGeometry(500,150,100,50)
exitBtn.clicked.connect(exit)
exitBtn.setToolTip("click to exit")




main_gui.show()
myapp.exec_()
