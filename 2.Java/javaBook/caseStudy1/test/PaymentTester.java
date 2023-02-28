package javaBook.caseStudy1.test;

import javaBook.caseStudy1.src.Payment;

public class PaymentTester {
    public static void main(String[] args) {
        Payment test = new Payment("December", 1000);

        System.out.println("Month - " + test.getMonth());
        System.out.println("Amount - " + test.getAmount());

        System.out.println(test.toString());
    }
}
