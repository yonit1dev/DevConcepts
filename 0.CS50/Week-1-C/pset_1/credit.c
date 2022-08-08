#include <stdio.h>
#include <stdbool.h>

int main(int argc, char const *argv[])
{
    long long cc_number;

    printf("Credit Card Number: ");
    scanf("%lld", &cc_number);

    int length = 0, sum_second_to_last = 0, sum_rest_digits = 0, last_digit = 0, second_digit = 0;

    while (cc_number)
    {
        second_digit = last_digit;
        last_digit = cc_number % 10;

        if(length % 2 == 0)
        {
            sum_rest_digits += last_digit;
        }
        else
        {
            int multiple = 2 * last_digit;
            sum_second_to_last += (multiple % 10) + (multiple / 10);
        }

        length++;
        cc_number /= 10;
    }

    if (((sum_rest_digits + sum_second_to_last) % 10) == 0)
    {
        int first_digits = (last_digit * 10) + second_digit;

        if(first_digits > 50 && first_digits < 56 && length == 16)
        {
            printf("Mastercard!\n");
        }
        else if(last_digit == 4 && length >= 13 && length <= 16)
        {
            printf("Visa!\n");
        }
        else
        {
            printf("American Express!\n");
        }
    }
    else
    {
        printf("Invalid!\n");
    }

    return 0;
}