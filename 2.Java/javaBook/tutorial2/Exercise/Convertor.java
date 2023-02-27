package javaBook.tutorial2.Exercise;

import java.util.Scanner;

public class Convertor {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("*** Pounds to Kilos Convertor ***");

        final double convertor = 2.2;

        System.out.print("Enter weight in pounds: ");
        double pounds = scan.nextDouble();
        scan.close();

        double kilos = pounds / convertor;

        System.out.println("Weight in Kilos: " + kilos);
    }
}
