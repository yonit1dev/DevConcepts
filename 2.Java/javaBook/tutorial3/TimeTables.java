package javaBook.tutorial3;

import java.util.Scanner;

public class TimeTables {
    public static void main(String[] args) {
        char group;

        Scanner scan = new Scanner(System.in);

        System.out.println("*** Lab Times ***");

        System.out.print("Lab Group (A, B, C, D): ");
        group = scan.next().charAt(0);
        scan.close();

        switch (group) {
            case 'A': case 'D': // combined cases
                System.out.println("10:00 A.M.");
                break;
            case 'B':
                System.out.println("1:00 P.M.");
                break;
            case 'C':
                System.out.println("3:00 P.M.");
                break;
            default:
                System.out.println("No such lab group");
        }
    }
}
