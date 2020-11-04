
import guical




#def printnum():
    
 
 #return guical.result.setText("jjj")


#guical.addbtn.clicked.connect(printnum)






class calculate():
        


    def add(self):

        self.x = int(guical.num1.text())
        self.y = int(guical.num2.text())
        n=self.x+self.y
        return guical.result.setText(str(n))
    
    
    def sub(self):

        self.x = int(guical.num1.text())
        self.y = int(guical.num2.text())
        n=self.x-self.y
        
        return guical.result.setText(str(n))
    
    
    
    def multi(self):

        self.x = int(guical.num1.text())
        self.y = int(guical.num2.text())
        n=self.x*self.y
        return guical.result.setText(str(n))
    
    





def printn():

    x = int(guical.num1.text())
    y = int(guical.num2.text())
    z = x+y
    return guical.result.setText(str(z))


def printn2():

    x=int(guical.num1.text())
    y=int(guical.num2.text())
    z=x-y
    return guical.result.setText(str(z))




ob=calculate()

    

guical.addbtn.clicked.connect(ob.add)

guical.subbtn.clicked.connect(ob.sub)

guical.multibtn.clicked.connect(ob.multi)



#guical.addbtn.clicked.connect(printn)
#guical.subbtn.clicked.connect(printn2)



guical.window.show()
guical.app.exec_()


