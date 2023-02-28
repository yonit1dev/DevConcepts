package javaBook.tutorial7;

public class Oblong {
    private double width, height;

    Oblong(double width, double height) {
        this.width = width;
        this.height = height;
    }

    void setHeight(double height) {
        this.height = height;
    }

    void setWidth(double width) {
        this.width = width;
    }

    double getHeight() {
        return this.height;
    }

    double getWidth() {
        return this.width;
    }

    double calculateArea() {
        return this.width * this.height;
    }

    double calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    void printInfo() {
        System.out.println("Width: " + this.width);
        System.out.println("Height: " + this.height);

        System.out.println("Area: " + this.calculateArea());
        System.out.println("Perimeter: " + this.calculatePerimeter());
    }
}
