//#define __HD_MAIN__
#include "main.h"
#include "add.h"

int x=32;
int y=545;
int o=203;

void mos();
void mosb();
void __attribute__((destructor)) mos();
void __attribute__((constructor)) mosb();
//#pragma exit mos 200

void mosb(){
printf("mosb\n");
}
void mos(){
printf("\nmos\n");
}


int main()
{

    printf("main");
   // int x[]={4,5,6,7,6,5,5,5,4,3,4,3,32,3};

    //printf("%ld\n",size_array(x));

  //mo("ljnkjnh %d  %d %d %d %d",x,o,y,y,y);
 return 0;

}


void print ( int  a[], int num){
      int y =5;
     y+=6;
     int i;


 for (i=0;i<num;++i){
      printf("%d",*(a+i));


      //a[i]=a[i]++;

      //a[i]=a[i]++;
 }

printf(" y = %d \n",y);


}


