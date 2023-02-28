package javaBook.tutorial9;

public class PartTimeEmployee extends Employee {
    private double hourlyPay;

    public PartTimeEmployee(String number, String name, double hourlyPay) {
        super(number, name);
        this.hourlyPay = hourlyPay;
    }

    public double getHourlyPay() {
        return hourlyPay;
    }

    public void setHourlyPay(double hourlyPay) {
        this.hourlyPay = hourlyPay;
    }

    public double calculateWeeklyPay(int hours) {
        return hours * this.hourlyPay;
    }

    @Override
    public String getStatus() {
        return "Part-Time";
    }

}
