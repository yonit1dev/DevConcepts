package javaBook.tutorial3;

import java.util.Scanner;

public class Spies {
    public static void main(String[] args) {
        int level;

        Scanner scan = new Scanner(System.in);

        System.out.println("*** Secret Agency ***");

        System.out.print("Enter clearance level: ");
        level = scan.nextInt();
        scan.close();

        switch (level) {
            case 3:
                System.out.println("The code for the safe is '007'");
            case 2:
                System.out.println("Jim Kitt is a double agent for Egyptians!");
            case 1:
                System.out.println("Beware of served drinks in the lobby bar");
                break;
            default:
                System.out.println("No such clearance level");
        }
    }
}
