package javaBook.tutorial2.Exercise;

import java.util.Scanner;

public class BMI {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("*** BMI Calculator ***");

        System.out.print("Enter weight in kilos: ");
        double weight = scan.nextDouble();
        System.out.print("Enter heigh in cms: ");
        double height = scan.nextDouble();
        scan.close();

        double bmi = weight / (height * height);

        System.out.println("BMI: " + bmi);
    }
}
