package javaBook.tutorial8;

import java.util.ArrayList;

public class Bank {
    private ArrayList<BankAccountMod> accountList = new ArrayList<>();

    private int search(String accNumber) {
        for (int i = 0; i <= (accountList.size() - 1); i++) {

            BankAccountMod current = accountList.get(i);
            String tempNumber = current.getAccNumber();

            if (tempNumber.equals(accNumber)) {
                return i;
            }
        }
        return -999;
    }

    public int getTotal() {
        return accountList.size();
    }

    public BankAccountMod getItem(String accNumber) {
        int index = this.search(accNumber);

        if (index == -999) {
            return null;
        }

        return accountList.get(index);
    }

    public boolean addAccount(String accName, String accNumber) {
        int exists = this.search(accNumber);
        if (exists == -999) {
            accountList.add(new BankAccountMod(accName, accNumber));
            return true;
        }
        return false;
    }

    public boolean depositMoney(String accNumber, double amount) {
        int index = this.search(accNumber);

        if (index != -999) {
            accountList.get(index).deposit(amount);
            return true;
        }
        return false;
    }

    public boolean withdrawMoney(String accNumber, double amount) {
        int index = this.search(accNumber);

        if (index != -999) {
            boolean success = accountList.get(index).withdraw(amount);
            if (success) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public boolean remove(String accNumber) {
        int index = this.search(accNumber);

        if (index != -999) {
            accountList.remove(index);
            return true;
        }
        return false;
    }
}
