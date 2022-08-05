#include <stdio.h>

int get_cents(void);
int calculate_cents(int cash, int cent_value);

int main(int argc, char const *argv[])
{
    int cents = get_cents();

    int quarters = calculate_cents(cents, 25);
     
    int dimes = calculate_cents((cents % 25), 10);

    int nickels = calculate_cents(((cents % 25) % 10), 5);

    int pennies = calculate_cents((((cents % 25) % 10) % 5), 1);

    int total_coins = quarters + dimes + nickels + pennies;

    printf("%i\n", total_coins);
    return 0;
}

int get_cents(void)
{
    int cents = 0;
    do
    {
        printf("Change owed: ");
        scanf("%d", &cents);
    } while (cents <= 0);

    return cents;
}

int calculate_cents(int cash, int cent_value)
{
    int cents = cash / cent_value;
    
    return cents;
}