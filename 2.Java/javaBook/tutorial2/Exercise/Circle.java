package javaBook.tutorial2.Exercise;

import java.util.Scanner;

public class Circle {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("*** Circle Area and Circumference Calculator ***");

        final double pi = 3.1416;

        System.out.print("Enter radius of cirlce: ");
        double radius = scan.nextDouble();

        scan.close();

        double circumference = 2 * pi * radius;
        double area = pi * (radius * radius);

        System.out.println("Area of circle: " + area);
        System.out.println("Circumference of circle: " + circumference);
    }
}
