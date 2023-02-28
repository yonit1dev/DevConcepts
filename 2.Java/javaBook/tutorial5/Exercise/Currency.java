package javaBook.tutorial5.Exercise;

import java.util.Scanner;

public class Currency {
    public static void main(String[] args) {

        Scanner key = new Scanner(System.in);

        System.out.println("**** Currency Convertor ****");
        char choice;

        do {
            double sum = recieveSum(key);
            double exRate = recieveExRate(key);

            double result = convert(sum, exRate);

            printResult(sum, exRate, result);

            System.out.println("Would you like to convert another sum?");
            System.out.println("[c] for yes\n[q] for no ");
            choice = key.next().charAt(0);

        } while (choice == 'c' || choice == 'C');

        System.out.println("Exitted convertor!");
        key.close();

    }

    static double recieveSum(Scanner scan) {
        System.out.print("Enter the sum of money: ");
        double sum = scan.nextDouble();

        return sum;
    }

    static double recieveExRate(Scanner scan) {

        System.out.print("Enter the exchange rate: ");
        double exRate = scan.nextDouble();

        return exRate;
    }

    static double convert(double money, double rate) {
        return money * rate;
    }

    static void printResult(double money, double rate, double result) {
        System.out.println(money + "$ exchanged at a rate of " + rate + "ETB is equivalent to " + result + "ETB");
    }
}
