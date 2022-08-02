#include <stdio.h>

/*
 * Simple parity checker program.
 * Asks the user for an integer and checks whether it's odd or even.
 * number : user integer.
 */

int main(int argc, char const *argv[])
{
    int number;

    printf("Enter number: ");
    scanf("%i", &number);

    // Modulo operator used to check the remainder of the number when divided by two.
    if (number % 2 == 0) 
    {
        printf("%i is even!\n", number);
    }
    else
    {
        printf("%i is odd!\n", number);
    }

    return 0;
}
