package javaBook.tutorial8;

import java.util.Scanner;

public class EasyScanner {
    public static int nextInt() {
        Scanner key = new Scanner(System.in);
        return key.nextInt();
    }

    public static double nextDouble() {
        Scanner key = new Scanner(System.in);
        return key.nextDouble();
    }

    public static char nextChar() {
        Scanner key = new Scanner(System.in);
        return key.next().charAt(0);
    }

    public static String nextString() {
        Scanner key = new Scanner(System.in);
        return key.next();
    }
}
