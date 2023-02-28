package javaBook.tutorial8.Exercise;

public class StockItem {
    private final String stockNumber, name;
    private double price;
    private int totalStock;

    private static double salesTax = 0;

    StockItem(String stockNumber, String name, double price) {
        this.stockNumber = stockNumber;
        this.name = name;
        this.price = price;
        this.totalStock = 0;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getStockNumber() {
        return stockNumber;
    }

    public String getName() {
        return name;
    }

    public static double getSalesTax() {
        return salesTax;
    }

    public static void setSalesTax(double rate) {
        salesTax = rate;
    }

    public void increaseTotalStock(int number) {
        this.totalStock += number;
    }

    public int getTotalStock() {
        return totalStock;
    }

    public double calculateTotalPrice() {
        return this.price * this.totalStock;
    }

    public void displayInfo() {
        System.out.println("Stock Name: " + this.name);
        System.out.println("Stock Number: " + this.stockNumber);
        System.out.println("Stock Price: " + this.price);
        System.out.println("Total Stockss: " + this.totalStock);
    }
}
