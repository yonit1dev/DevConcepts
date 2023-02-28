package javaBook.tutorial6;

public class ArrayM {
    public static void main(String[] args) {
        printElements();

        printVarArgs(4, 5);

        double[] prices = { 10.4, 34.6, 9.4, 3.9 };
        double sum = arraySum(prices);

        System.out.println("Sum of elements is " + sum);

        int[] ids = { 1, 2, 3, 4, 5, 6, 10, 40 };
        int targetID = 1;
        int falseID = 50;

        boolean exists1 = arrayMember(ids, targetID);
        if (exists1) {
            System.out.println("Student with ID: " + targetID + " exists.");
        } else {
            System.out.println("Student with ID: " + targetID + " doesn't exist.");
        }

        boolean exists2 = arrayMember(ids, falseID);
        if (exists2) {
            System.out.println("Student with ID: " + falseID + " exists");
        } else {
            System.out.println("Student with ID: " + falseID + " doesn't exist.");
        }

    }

    static void printElements() {
        System.out.println("Printing using the enhanded for loop!");
        double[] prices = { 1.0, 2.0, 3.0 };

        System.out.println("Length: " + prices.length);

        for (double item : prices) {
            System.out.println(item + " for loop!");
        }
    }

    static void printVarArgs(double... prices) {
        System.out.println("Printing using varargs in arguments!");

        System.out.println("Length: " + prices.length);

        for (double item : prices) {
            System.out.println(item + " varargs!");
        }

    }

    static double arraySum(double[] array) {
        double sum = 0;

        for (double number : array) {
            sum += number;
        }

        return sum;
    }

    static boolean arrayMember(int[] array, int target) {
        for (int id : array) {
            if (id == target) {
                return true;
            }
        }

        return false;
    }
}
