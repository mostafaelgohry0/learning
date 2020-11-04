#include <stdio.h>
#include <stdlib.h>

#define n 3453
#define my_macro_fun(...) add(__VA_ARGS__)

void add(int b,int y,int j){
printf("%d",b*y*j);
}
int main()
{

   int a [39]={3,4,5,2,4,5,3,2,3532,2};
   my_macro_fun(5,2,2);

   //printf("%d\n",a[23]);

   //for(int i =0 ;i <43 ; i++){


   //printf("%d ", n );

  // }


    return 0;
}
