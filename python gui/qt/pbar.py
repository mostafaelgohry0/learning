

   #  progress bar  
   
from PyQt4.QtCore import *
from PyQt4.QtGui import *
import time

import sys

app = QApplication(sys.argv)

pbar=QWidget()
pbar.resize(600,400)

p=80
bar1=QProgressBar(pbar)
bar1.move(70,40)
bar1.resize(400,30)
bar1.setValue(p)

pbar.show()

app.exec_()