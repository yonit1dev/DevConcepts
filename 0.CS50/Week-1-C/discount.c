#include <stdio.h>

/*
 * Functions : blocks of code to perform a specific taks.
 * A discount function to calculate discounts.
 * 
 * discount : function to calculate discount
 * regular : initial price.
 * percentage : the discount percent.
 * sale: final price.
 */

float discount(float price, float percentage);

int main(int argc, char const *argv[])
{
    float regular;

    printf("Regular Price: ETB ");
    scanf("%f", &regular);

    float sale = discount(regular, 15);

    printf("Sale Price: ETB %.2f\n", sale);

    return 0;
}

float discount(float price, float percentage)
{
    return (price * ((100 - percentage) / 100));
}