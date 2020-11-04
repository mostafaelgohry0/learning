#include <stdio.h>
#include <stdlib.h>
#include <string.h>

 static int  x =4 ;
void fun2(){
    int v = 1;
   int b =4;
   v++;
   b++;
   x++;
   printf("v= %d  b=%d  x=%d \n",v,b,x);
   v++;
   b++;
    x++;
   printf("v= %d  b=%d  x=%d \n",v,b,x);
   v++;
   b++; x++;
   printf("v= %d  b=%d  x=%d \n",v,b,x);
   while (b<300) {
      fun2();
   }

}

void fun5(){
  fun2();
}
int main()
{
  fun5();
fun2();

  return 0;
}
