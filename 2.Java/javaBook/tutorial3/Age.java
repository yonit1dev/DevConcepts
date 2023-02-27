package javaBook.tutorial3;

import java.util.Scanner;

public class Age {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("How old are you? ");
        int age = scan.nextInt();

        if (age < 13) {
            System.out.println("Hello, Junior!");
        } else {
            System.out.println("Hello!");
        }

        System.out.println("Enjoy your ride!");
        scan.close();
    }
}