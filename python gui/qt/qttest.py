

 #  qt  
 
from PyQt4.QtCore import *    
from PyQt4.QtGui  import *

import time

import sys
import os


#  adding fun 

#x=os.system('date')

app1 = QApplication(sys.argv)  

test = QWidget()    # main window


test.setWindowIcon(QIcon('pt.png'))  


lable1=QLabel(test)  #  for lable 
lable1.setText("hallo  QT  ")
lable1.move(200,100)        #  set postion 




          #  set  window size 
#test.resize(500,400)   # set size 
#test.move(500,200)    # set postion 
test.setGeometry(300,100,700,600)



test.setWindowTitle("hallo  QT ")



                       #  create   button 
btn1=QPushButton("mk,m",test)
btn1.setGeometry(50,150,100,50)



                      #  create  exit  button 
exitBtn=QPushButton("exit ",test)
exitBtn.setGeometry(300,150,100,50)
exitBtn.clicked.connect(exit)
exitBtn.setToolTip("click to exit")






'''
#massage 


msg=QMessageBox.question(test,"open ","want to open program ",QMessageBox.Yes|QMessageBox.No)


if msg==QMessageBox.No:
    
    test.exit()
    
else:
    
    test.show()
    

#test.show()

'''


# line 



           #  set  text input 
           
text = QLineEdit(test)
text.move(120,50)
text.resize(50,40)
text.setPlaceholderText("kk")
#text.setText("hi")     # inital text 

# for passward

#text.setEchoMode(QLineEdit.Password)

input_text=text.text()
print (input_text)


'''

#         add  

num1 = QLineEdit(test)
num1.move(100,300)
num1.resize(100,30)
num1.setPlaceholderText("number 1")

num2 = QLineEdit(test)
num2.move(250,300)
num2.resize(100,30)
num2.setPlaceholderText("number 2")


def add(num1,num2):
    
    z = num1.text()+num2.text()
    
    return z


#print add(num1.text(),num2.text())
result = QLineEdit(test)
result.move(200,350)
result.resize(100,30)

add_btn=QPushButton("add",test)
add_btn.move(70,350)


#          check box 
'''
check1=QCheckBox(test,text="hi check")
check1.move(10,120)
check1.setChecked(True)



#radio box


radio1=QRadioButton(test,text="hi radio1")
radio1.move(20,440)
radio1.setChecked(True)



radio2=QRadioButton(test,text="hi radio2")
radio2.move(20,460)
radio2.setChecked(True)


               #combo box

combo1=QComboBox(test)
combo1.move(10,500)
combo1.resize(70,40)
combo1.addItem("x1")
combo1.addItem("x2")



combo2=QComboBox(test)
combo2.move(10,550)
combo2.resize(70,40)
combo2.addItems(["x3","x4","x5"])
combo2.setCurrentIndex(1)

'''
# prograss bar 

probar=QProgressBar(test)
probar.move(100,10)
probar.resize(400,30)

for i in range(1,99):
    
    probar.setValue(i)
    time.sleep(.2)
   ''' 

### files 


#file1=QFileDialog.getOpenFileName(test,"open file ",'/')








test.show()


app1.exec_()

