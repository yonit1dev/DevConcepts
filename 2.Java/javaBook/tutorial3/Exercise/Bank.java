package javaBook.tutorial3.Exercise;

import java.util.Scanner;

public class Bank {
    public static void main(String[] args) {
        final double minBalanceA = 250;
        final double minBalanceB = 1000;
        final double minBalanceC = 250;
        final double minBalanceX = 5000;

        final double interestA = 0.015;
        final double interestB = 0.02;
        final double interestC = 0.015;
        final double interestX = 0.05;

        Scanner input = new Scanner(System.in);

        System.out.println("**** Interest Calculator ****");
        System.out.print("Enter amount of saved money: ");
        double amount = input.nextDouble();

        System.out.print("Enter your type of bank account: ");
        char type = input.next().charAt(0);

        input.close();

        double interest = 0;

        switch (type) {
            case 'A':
                if (amount < minBalanceA) {
                    System.out.println("No interest on this balance for account type - " + type);
                    break;
                }
                interest = amount * interestA;
                System.out.println("Interest for account type - " + type + " is " + interest);
                break;
            case 'B':
                if (amount < minBalanceB) {
                    System.out.println("No interest on this balance for account type - " + type);
                    break;
                }
                interest = amount * interestB;
                System.out.println("Interest for account type - " + type + " is " + interest);
                break;
            case 'C':
                if (amount < minBalanceC) {
                    System.out.println("No interest on this balance for account type - " + type);
                    break;
                }
                interest = amount * interestC;
                System.out.println("Interest for account type - " + type + " is " + interest);
                break;
            case 'X':
                if (amount < minBalanceX) {
                    System.out.println("No interest on this balance for account type - " + type);
                    break;
                }
                interest = amount * interestX;
                System.out.println("Interest for account type - " + type + " is " + interest);
                break;
            default:
                System.out.println("No such account type");
        }
    }
}
