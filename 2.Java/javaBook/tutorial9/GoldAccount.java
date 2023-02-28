package javaBook.tutorial9;

import javaBook.tutorial8.BankAccountMod;

public class GoldAccount extends BankAccountMod {
    private double overdraftLimit;

    public GoldAccount(String AccName, String AccNumber, double limit) {
        super(AccName, AccNumber);
        this.overdraftLimit = limit;
    }

    public double getOverdraftLimit() {
        return overdraftLimit;
    }

    public void setOverdraftLimit(double overdraftLimit) {
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public boolean withdraw(double amount) {
        if (amount > this.accBalance + this.overdraftLimit) {
            return false;
        } else {
            this.accBalance -= amount;
            return true;
        }
    }
}
