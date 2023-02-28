package javaBook.caseStudy1.src;

import java.util.ArrayList;

/**
 * Collection class to hold a list of Payment objects
 * 
 * @author Self
 * @version 0.0.1
 */

public class PaymentList {
    // attribute fields
    private ArrayList<Payment> pList;
    public final int MAX;

    /**
     * Constructor initialises the empty payment list and sets the maximum list size
     * 
     * @param max: The maximum number of payments in the list
     */
    public PaymentList(int max) {
        this.pList = new ArrayList<>();
        this.MAX = max;
    }

    /**
     * Checks if the payment list is full
     * 
     * @return Returns true if the list is full and false otherwise
     */
    public boolean isFull() {
        return this.pList.size() == this.MAX;
    }

    /**
     * Adds a new payment to the end of the list
     * 
     * @param payment: The payment to add
     * @return Returns true if the object was added successfully and false otherwise
     */
    public boolean addPayment(Payment payment) {
        if (!this.isFull()) {
            pList.add(payment);
            return true;
        }
        return false;
    }

    /**
     * Gets the total number of payments
     * 
     * @return Returns the total number of payments currently in the list
     */
    public int getTotal() {
        return this.pList.size();
    }

    /**
     * Reads the payment at the given position in the list
     * 
     * @param index: The logical position of the payment in the list
     * @return Returns the payment at the given logical position in the list
     *         or null if no payment at that logical position
     */
    public Payment getPayment(int index) {
        if (index < 1 || index > getTotal()) {
            return null;
        }
        return this.pList.get(index - 1);
    }

    /**
     * Calculates the total payments made by the tenant
     * 
     * @return Returns the total value of payments recorded
     */
    public double calculateTotalPaid() {
        double total = 0;

        for (Payment payment : pList) {
            total += payment.getAmount();
        }

        return total;
    }

    @Override
    public String toString() {
        return pList.toString();
    }
}
