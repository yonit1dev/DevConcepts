package javaBook.tutorial2;

import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double price, tax;
        System.out.println("*** Product Price Check ***");

        System.out.print("Enter initial price of product: ");
        price = input.nextDouble();

        System.out.print("Enter tax amount in percentage: ");
        tax = input.nextDouble();

        double cost = price * (1 + (tax / 100));

        System.out.println("Cost of product is: " + cost);

        input.close();
    }
}
