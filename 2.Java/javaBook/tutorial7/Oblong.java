package javaBook.tutorial7;

public class Oblong {
    private double width, height;

    public Oblong(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getHeight() {
        return this.height;
    }

    public double getWidth() {
        return this.width;
    }

    public double calculateArea() {
        return this.width * this.height;
    }

    public double calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    public void printInfo() {
        System.out.println("Width: " + this.width);
        System.out.println("Height: " + this.height);

        System.out.println("Area: " + this.calculateArea());
        System.out.println("Perimeter: " + this.calculatePerimeter());
    }
}
