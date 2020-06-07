#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main(){
    int arr[6][6];
    int sum =0 ;
    int sum_final =0;
    int i ,j;
    for(i = 0; i < 6; i++){
       for(j = 0; j < 6;j++){
          
          scanf("%d",&arr[i][j]);
       }
    }
    
    
     for(i = 0; i < 4; i++){
       for( j = 0; j < 4; j++){
          
           
           sum = arr[i][j]+arr[i][j+1]+arr[i][j+2]+
                            arr[i+1][j+1]+
                 arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];

           if(sum > sum_final ){
               sum_final = sum ;
           }
          
       }
    }
    
    
    printf("\n\n%d",sum_final);
    
    
    
    
    
    return 0;
}

