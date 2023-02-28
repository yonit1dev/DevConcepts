package javaBook.tutorial8;

public class BankAccountMod {
    private String accNumber, accName;
    private double accBalance;
    private static double interestRate = 0;

    BankAccountMod(String AccName, String AccNumber) {
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

    public static double getInterestRate() {
        return interestRate;
    }

    public static void setInterestRate(double rate) {
        interestRate = rate;
    }

    public void addInterest() {
        accBalance += (accBalance * (interestRate / 100));
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
