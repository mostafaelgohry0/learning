


class calculate():

    def __init__(self,num1,num2):
        
        self.num1=num1
        self.num2=num2
    
    def add(self):
        
        return self.num1+self.num2
    
    
    def sub(self,num1,num2):
        
        
        return num1-num2
    
    
    
    def multi(self,num1,num2):
        
        
        return self.num1*self.num2
    
    
    
    
num1=input("enter num1 :")
num2=input("enter num2 :")
sign= input(" enter sign ")


ob=calculate(3,4)

if(sign=="+"):
    x=ob.add()
    print x
    

if(sign=="-"):
    x=ob.sub(num1,num2)
    print x
    
    
    
if (sign=="*"):
    x=ob.multi(num1,num2)
    print x