#include <stdio.h>

#define fun main 

#define  start m##a##i##n

#define string(s) #s


int start (){
    
    printf("no main \n");
     
   // start();
    printf ("%s\n",string(hi string));
    
     printf("Current File :%s\n", __FILE__ );
   printf("Current Date :%s\n", __DATE__ );
   printf("Current Time :%s\n", __TIME__ );
   printf("Line Number :%d\n", __LINE__ );
    
    
    return 0;
}