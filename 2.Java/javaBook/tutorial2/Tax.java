package javaBook.tutorial2;

public class Tax {
    public static void main(String[] args) {
        double price, tax, cost;

        price = 500;
        tax = 17.5;

        cost = price * (1 + (tax / 100));

        System.out.println("Cost of item: " + cost);
    }
}
