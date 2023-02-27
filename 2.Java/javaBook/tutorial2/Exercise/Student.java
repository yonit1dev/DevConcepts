package javaBook.tutorial2.Exercise;

import java.util.Scanner;

public class Student {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("*** Group Formation ***");

        System.out.print("Enter team size: ");
        int size = scan.nextInt();

        System.out.print("Enter number of students: ");
        int students = scan.nextInt();

        scan.close();

        int totalTeams = students / size;
        int leftOut = students % size;

        System.out.println("Total teams formed: " + totalTeams);
        System.out.println("Left out students: " + leftOut);

    }
}
