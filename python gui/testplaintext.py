

from PyQt4.QtCore import *
from PyQt4.QtGui import *
import sys

myapp=QApplication(sys.argv)
window=QWidget()



text=QLineEdit(window)
text.setGeometry(50,50,120,40)



text2=QLineEdit(window)
text2.setGeometry(200,50,120,40)


btn=QPushButton(window)
btn.setGeometry(120,150,130,60)


def printstr():

    return text2.setText(text.text())






btn.clicked.connect(printstr)




window.show()
myapp.exec_()
