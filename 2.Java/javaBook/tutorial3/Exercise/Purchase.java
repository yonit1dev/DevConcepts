package javaBook.tutorial3.Exercise;

import java.util.Scanner;

public class Purchase {
    public static void main(String[] args) {
        Scanner key = new Scanner(System.in);

        double basicCost = 375.99;

        double screen38 = 75.99;
        double screen43 = 99.99;

        double antivirus = 65.99;
        double printer = 125.00;

        System.out.println("*** Total Computer Cost ***");
        System.out.println("Choose your size of screen! \n1. 38cm wide. \n2. 43cm wide.");
        int screenSize = key.nextInt();

        System.out.print("Would you like an antivirus pack? 1 for yes and 0 for no: ");
        int virusPick = key.nextInt();

        System.out.print("Would you like a printer? 1 for yes and 0 for no: ");
        int printerPick = key.nextInt();

        double totalCost = 0;

        if (screenSize == 1) {
            totalCost = basicCost + screen38;
        } else if (screenSize == 2) {
            totalCost = basicCost + screen43;
        }

        if (virusPick == 1 && printerPick == 1) {
            totalCost += antivirus + printer;
        } else if (virusPick == 1 && printerPick == 0) {
            totalCost += antivirus;
        } else if (virusPick == 0 && printerPick == 1) {
            totalCost += printer;
        }

        System.out.println("Total cost: " + totalCost);

        key.close();
    }
}
