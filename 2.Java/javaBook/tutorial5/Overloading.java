package javaBook.tutorial5;

public class Overloading {
    public static void main(String[] args) {
        int a = 2;
        int b = 3;

        int maxOfAB = max(a, b);

        System.out.println("Max of " + a + " and " + b + " is " + maxOfAB);

        int c = -1;
        int d = -5;
        int e = 10;

        int maxOfThree = max(c, d, e);

        System.out.println("Max of " + c + " and " + d + " and " + e + " is " + maxOfThree);
    }

    static int max(int a, int b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    static int max(int a, int b, int c) {
        int max = a;

        if (b > max) {
            max = b;
        }

        if (c > max) {
            max = c;
        }

        return max;
    }
}
