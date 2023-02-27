package javaBook.tutorial4.Exercise;

import java.util.Scanner;

public class VendingMachine {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int totalGum = 0;
        int totalChocolate = 0;
        int totalPopcorn = 0;
        int totalJuice = 0;

        int choice = 0;
        System.out.println("**** Vending Machine ****");

        while (choice != 6) {
            System.out.println(
                    "[1] Get gum.\n[2] Get chocolate.\n[3] Get popcorn.\n[4] Get juice.\n[5] Display total sold.\n[6] Quit\n");
            choice = scan.nextInt();

            switch (choice) {
                case 1:
                    totalGum += 1;
                    System.out.println("Here's your gum.");
                    break;
                case 2:
                    totalChocolate += 1;
                    System.out.println("Here's your chocolate.");
                    break;
                case 3:
                    totalPopcorn += 1;
                    System.out.println("Here's your popcorn.");
                    break;
                case 4:
                    totalJuice += 1;
                    System.out.println("Here's your juice.");
                    break;
                case 5:
                    System.out.println(totalGum + " items of gum sold!");
                    System.out.println(totalChocolate + " items of chocolate sold!");
                    System.out.println(totalPopcorn + " items of popcorn sold!");
                    System.out.println(totalJuice + " items of juice sold!");
                    break;
                case 6:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Wrong choice!");
            }
        }

        System.out.println("Exitted vending machine!");
        scan.close();
    }
}
