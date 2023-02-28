package javaBook.tutorial7;

public class BankAccount {
    private String accNumber, accName;
    private double accBalance;

    BankAccount(String AccName, String AccNumber) {
        this.accName = AccName;
        this.accNumber = AccNumber;
        this.accBalance = 0;
    }

    public String getAccNumber() {
        return accNumber;
    }

    public String getAccName() {
        return accName;
    }

    public double getBalance() {
        return accBalance;
    }

    public void deposit(double amount) {
        accBalance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount > accBalance) {
            return false;
        }
        accBalance -= amount;
        return true;
    }
}
