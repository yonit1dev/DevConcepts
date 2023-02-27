package javaBook.tutorial3.Exercise;

import java.util.Scanner;

public class BMIModified {
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

        if (bmi < 18.5) {
            System.out.println("Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            System.out.println("Healthy");
        } else {
            System.out.println("Overweight");
        }
    }
}
