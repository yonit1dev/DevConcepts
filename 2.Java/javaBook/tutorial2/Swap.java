package javaBook.tutorial2;

import java.util.Scanner;

public class Swap {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);

        // declare variables
        int x, y;

        // enter values
        System.out.print("Enter value for x ");
        x = keyboard.nextInt();
        System.out.print("Enter value for y ");
        y = keyboard.nextInt();

        keyboard.close();

        // code attempting to swap two variables
        int temp; // introduce a temporary variable - an intermediary
        temp = x;
        x = y;
        y = temp;

        // display results
        System.out.println("x = " + x);
        System.out.println("y = " + y);

    }
}
