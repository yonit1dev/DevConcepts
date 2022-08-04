#include <stdio.h>

/* 
 * Problem Set 1 : Solution to the Credit question.
 * It asks to implement checker for credit card numbers.
 * 
 */

long ask_input(void);
int luhn_algo(long credit_number);
int get_len_int(int number);

int main(int argc, char const *argv[])
{
    long credit_card = ask_input();
    
    return 0;
}

int get_len_int(int number)
{
    int length = 1;

    while (number > 9)
    {
        length++;

        number /= 10;
    }

    return length;
}

long ask_input(void)
{

    long number;

    printf("Number: ");
    scanf("%li", &number);

    int length = get_len_int(number);

    printf("%i\n", length);

    if (length < 13 || length > 16)
    {
        return 0;
    }
    else{
        return number;
    }
}

int luhn_algo(long credit_number)
{
    return 0;

}