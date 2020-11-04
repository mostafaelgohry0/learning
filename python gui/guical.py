

from PyQt4.QtCore import SIGNAL
from PyQt4.QtGui import *

import sys

app=QApplication(sys.argv)
window=QWidget()


####################################

window.setWindowTitle("calculator")

lb=QLabel(window)
lb.setText("<h1>calculator<h1>")
lb.move(200,30)
# get num1

num1=QLineEdit(window)
num1.move(200,100)
num1.resize(150,40)

num1lb=QLabel(window)
num1lb.setText("<h2>Enter num1<h2>")
num1lb.setGeometry(50,100,150,50)



# get num2

num2=QLineEdit(window)
num2.move(200,200)
num2.resize(150,40)


num2lb=QLabel(window)
num2lb.setText("<h2>Enter num2<h2>")
num2lb.setGeometry(50,200,150,50)





#  result 

result=QLineEdit(window)
result.move(200,300)
result.resize(150,40)

num2lb=QLabel(window)
num2lb.setText("<h2><b>Result<b><h2>")
num2lb.setGeometry(50,300,150,50)







#buttons 


addbtn=QPushButton("add",window)
addbtn.setGeometry(50,400,100,50)


subbtn=QPushButton("sub",window)
subbtn.setGeometry(200,400,100,50)



multibtn=QPushButton("multiply",window)
multibtn.setGeometry(350,400,100,50)




exitbtn=QPushButton("exit",window)
exitbtn.setGeometry(200,500,100,50)
exitbtn.clicked.connect(exit)








'''

def printnum():
    
    return result.setText("hi mostafa ")



addbtn.clicked.connect(printnum)
'''





#######################################


#window.show()
#app.exec_()





