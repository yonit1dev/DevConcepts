package javaBook.tutorial11;

import javaBook.tutorial8.BankAccountMod;

public class CheckableBankAccount extends BankAccountMod implements Checkable {

    public CheckableBankAccount(String accName, String accNumber) {
        super(accName, accNumber);
    }

    @Override
    public boolean check() {
        String accNumber = this.getAccNumber();

        // check for number of digits
        if (accNumber.length() != 8) {
            return false;
        }

        // chech whether type is digit
        for (int i = 0; i < accNumber.length(); i++) {
            if (!Character.isDigit(accNumber.charAt(i))) {
                return false;
            }
        }
        return true;
    }
}
