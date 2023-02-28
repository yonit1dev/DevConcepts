package javaBook.tutorial8;

public class Tester {
    public static void main(String[] args) {
        // BankAccountMod newAcc = new BankAccountMod("Ahadu Bank", "00 10 20 30 40
        // 50");

        // System.out.println(newAcc.getAccName());
        // System.out.println(newAcc.getBalance());

        // newAcc.deposit(2000);
        // System.out.println(newAcc.getBalance());

        // newAcc.withdraw(500);
        // System.out.println(newAcc.getBalance());

        // BankAccountMod.setInterestRate(7);

        // newAcc.addInterest();
        // System.out.println(BankAccountMod.getInterestRate());
        // System.out.println(newAcc.getBalance());

        Bank BOA = new Bank();

        boolean added = BOA.addAccount("Savings Account", "90 90 90 90");
        if (added) {
            System.out.println("Added bank account: 90 90 90 90 to bank");
        } else {
            System.out.println("Account exists!");
        }

        added = BOA.addAccount("Checking Account", "10 10 10 10");
        if (added) {
            System.out.println("Added bank account: 10 10 10 10 to bank");
        } else {
            System.out.println("Account exists!");
        }

        added = BOA.addAccount("Checking Account", "10 10 10 10");
        if (added) {
            System.out.println("Added bank account: 10 10 10 10 to bank");
        } else {
            System.out.println("Account exists!");
        }

    }
}