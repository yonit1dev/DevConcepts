package javaBook.tutorial8.Exercise;

import java.util.Scanner;

public class Tester {
    public static void main(String[] args) {
        Scanner key = new Scanner(System.in);
        Scanner keyString = new Scanner(System.in);

        String stockName, stockNumber;
        double price;

        System.out.print("Enter Stock Name: ");
        stockName = keyString.nextLine();

        System.out.print("Enter Stock Number: ");
        stockNumber = keyString.nextLine();

        System.out.print("Enter price: ");
        price = key.nextDouble();

        key.close();
        keyString.close();

        StockItem stock = new StockItem(stockNumber, stockName, price);
        StockItem.setSalesTax(10);

        stock.increaseTotalStock(5);

        System.out.println("Stock Number: " + stock.getStockNumber());

        System.out.println("Price: " + stock.calculateTotalPrice());
    }
}
