package javaBook.tutorial7;

import java.util.ArrayList;

public class Collections {
    public static void main(String[] args) {
        ArrayList<BankAccount> accounts = new ArrayList<>();

        BankAccount db = new BankAccount("Dashen Bank", "538 888 888 812");
        BankAccount cbe = new BankAccount("Commercial Bank", "538 888 888 812");
        BankAccount ab = new BankAccount("Amhara Bank", "538 888 888 812");

        accounts.add(db);
        accounts.add(cbe);
        accounts.add(ab);

        for (BankAccount acc : accounts) {
            System.out.print(acc.getAccName() + " - ");
            System.out.println(acc.getBalance());
        }
    }
}
