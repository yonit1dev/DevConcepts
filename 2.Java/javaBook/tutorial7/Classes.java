package javaBook.tutorial7;

public class Classes {
    public static void main(String[] args) {
        // Oblong oblong = new Oblong(10, 5);

        // oblong.printInfo();

        // oblong.setHeight(10);
        // oblong.setWidth(10);

        // oblong.printInfo();

        BankAccount boa = new BankAccount("Bank of Abyssinia", "49 99 99 12");
        boa.deposit(1500);

        System.out.println("Account Name: " + boa.getAccName());
        System.out.println("Account Number: " + boa.getAccNumber());
        System.out.println("Balance: " + boa.getBalance());

        System.out.println(boa.withdraw(1000));
        System.out.println("Balance: " + boa.getBalance());

        System.out.println(boa.withdraw(1000));
        System.out.println("Balance: " + boa.getBalance());
    }

}
