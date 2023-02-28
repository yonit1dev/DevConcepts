package javaBook.tutorial9;

public abstract class Employee {
    private String number;
    private String name;

    public Employee(String number, String name) {
        this.name = name;
        this.number = number;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String getNumber() {
        return number;
    }

    public abstract String getStatus();
}
