#include <stdio.h>
#include <stdbool.h>

/* 
 * Problem Set 1 : Solution to the Mario question implied with more comfortable.
 * It asks to implement a pyramid of hash symbols
 * 
 * height : store how tall the pyramid is.
 * ask_input : function to ask and validate user input.
 * duplicate : function to repeat character in a row
 * draw_pyramid : function to draw pyramid based on height.
 */

// Prototypes.
int ask_input(void);
void duplicate(int times, char c);
void draw_pyramid(int height);

int main(int argc, char const *argv[])
{

    int height = ask_input();

    draw_pyramid(height);

    return 0;
}

int ask_input(void)
{

    int height;

    while (true)
    {
        printf("Height: ");
        scanf("%i", &height);

        if (height < 1 || height > 8)
        {
            continue;
        }
        else{
            break;
        }
    }

    return height;
}

void duplicate(int times, char c)
{
    while (times-- > 0)
    {
        printf("%c", c);
    }
}

void draw_pyramid(int height)
{
    for (int i = 1; i <= height; i++)
    {
        int spaces = height - i;

        duplicate(spaces, ' ');
        duplicate(i, '#');

        printf(" ");

        duplicate(i, '#');

        printf("\n");
    }
}