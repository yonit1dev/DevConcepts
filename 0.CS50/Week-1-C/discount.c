#include <stdio.h>

/*
 * Functions : blocks of code to perform a specific taks.
 * A discount function to calculate discounts.
 * 
 * discount : function to calculate discount
 * regular : initial price.
 * sale: final price
 */

float discount(float price);

int main(int argc, char const *argv[])
{
    float regular;

    printf("Regular Price: ETB ");
    scanf("%f", &regular);

    float sale = discount(regular);

    printf("Sale Price: ETB %.2f\n", sale);

    return 0;
}

float discount(float price)
{
    return price * 0.85;
}