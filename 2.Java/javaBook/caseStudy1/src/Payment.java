package javaBook.caseStudy1.src;

/**
 * Class used to store details of a single payment of a tenant in a hostel
 * 
 * @author Self
 * @version 0.0.1
 */

public class Payment {
    private String month;
    private double amount;

    public Payment(String month, double amount) {
        this.month = month;
        this.amount = amount;
    }

    public String getMonth() {
        return month;
    }

    public double getAmount() {
        return amount;
    }

    @Override
    public String toString() {
        return "(" + this.month + ": " + this.amount + ")";
    }
}
