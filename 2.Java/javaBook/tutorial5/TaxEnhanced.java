package javaBook.tutorial5;

import java.util.Scanner;

public class TaxEnhanced {
    public static void main(String[] args) {

        System.out.println("**** Tax Calculator ****");

        double[] input = recieveInput();

        double price = input[0];
        double tax = input[1];

        double cost = calcCost(price, tax);

        System.out.println("Cost of product total: " + cost);
    }

    static double[] recieveInput() {
        Scanner key = new Scanner(System.in);

        double price, tax;

        System.out.println("Enter the price of the product: ");
        price = key.nextDouble();

        System.out.println("Enter the tax rate: ");
        tax = key.nextDouble();

        key.close();

        double[] result = new double[2]; // used arrays which isn't discussed in the book till later
        result[0] = price;
        result[1] = tax;

        return result;
    }

    static double calcCost(double price, double tax) {
        return price + (1 * (tax / 100));
    }
}