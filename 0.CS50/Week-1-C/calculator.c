#include <stdio.h>

/*
 * Simple calculator program.
 * Asks the user for two integers and operates on them.
 * first_int : first integer.
 * second_int : second integer.
 */

int main(int argc, char const *argv[])
{
    int first_int;
    int second_int;

    printf("Enter first integer: ");
    scanf("%i", &first_int);

    printf("Enter second integer: ");
    scanf("%i", &second_int);

    int sum =  first_int + second_int; // sum of the integers
    int difference = first_int - second_int; // difference of the integers
    int product = first_int * second_int; // product of the integers
    int quotient = first_int / second_int; // quotient of the integers
    int remainder = first_int % second_int; // remainder of the integers

    printf("The sum of %i and %i is %i\n\n", first_int, second_int, sum);

    printf("The difference of %i and %i is %i\n\n", first_int, second_int, difference);

    printf("The product of %i and %i is %i\n\n", first_int, second_int, product);

    printf("The quotient of %i and %i is %i\n\n", first_int, second_int, quotient);

    printf("The remainder of %i and %i is %i\n\n", first_int, second_int, remainder);

    return 0;
}
