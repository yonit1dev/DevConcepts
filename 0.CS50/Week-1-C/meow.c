#include <stdio.h>

/*
 * Loops, more specifically while and for loops.
 * A simple function is also introduced for abstraction, which is concept discussed later on.
 * meow : function to imitate a cat's meow.
 * n : number of times to meow
 */

void meow(int n); // Prototyping the function meow which is discussed later.

int main(int argc, char const *argv[])
{
    meow(2); // Calling the function meow. (Calling meaning executing)

    return 0;
}

// Defining the meow function
void meow(int n)
{
    for(int i = 0; i < n; i++) // For loop : the integer i is keeping track of the number of times we print "Meow".
    {
        printf("Meow!!!\n");
    }
}