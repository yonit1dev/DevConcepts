package javaBook.tutorial9;

public class FullTimeEmployee extends Employee {
    private double annualSalary;

    public FullTimeEmployee(String number, String name, double salary) {
        super(number, name);
        this.annualSalary = salary;
    }

    public double getAnnualSalary() {
        return annualSalary;
    }

    public void setAnnualSalary(double annualSalary) {
        this.annualSalary = annualSalary;
    }

    public double calculateMonthlyPay() {
        return this.annualSalary / 12;
    }

    @Override
    public String getStatus() {
        return "Full-Time";
    }

}
