package javaBook.caseStudy1.src;

public class Tenant {
    private String name;
    private int room;
    private PaymentList pl;
    private static final int MAX = 12;

    public Tenant(String name, int room) {
        this.name = name;
        this.room = room;
        this.pl = new PaymentList(MAX);
    }

    public void makePayment(Payment payment) {
        pl.addPayment(payment);
    }

    public String getName() {
        return name;
    }

    public int getRoom() {
        return room;
    }

    public PaymentList getPl() {
        return pl;
    }

    @Override
    public String toString() {
        return "Name - " + this.name + ". Room - " + this.room + ". Payments - " + this.pl;
    }
}
