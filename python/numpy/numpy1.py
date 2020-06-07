import numpy as np 
a1 = 'hi mostafa it is numpy'
b=np.frombuffer(a1,dtype = 'S1')
print b


print a1[3]

a=np.array([[34,54,22,123],[434,44,423,22,32],[445,2,213,22]])
print a 

print type(a)




'''
a2d= np.array( [ [32,443.89],[43.423,454],[222,432.43],[321,45] ] ,dtype=int )
print a2d[1][1] 
a2d.shape=(2,4)
print a2d 

print a2d.shape


r=np.arange(64)
r.shape=(4,16)
print r 


z=np.zeros([30,3],dtype = int )
print z 



e=np.empty([9,3],dtype = int )
print e

o=np.ones([9,3],dtype = int )
print o 

'''



#r=np.arange(64).reshape(4,16)
#print r

#l=np.linspace(1,3,300)
#print l












