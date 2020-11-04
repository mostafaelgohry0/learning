#!/usr/bin/env python
# -*- coding: utf-8 -*-





from PyQt4.QtCore import *
from PyQt4.QtGui  import *

import sys



app1 = QApplication(sys.argv)

test = QWidget()
lable1=QLabel(test)



test.setWindowTitle("hallo  QT ")
test.resize(500,400)
lable1.setText("mostafa ")
test.show()

app1.exec_()

