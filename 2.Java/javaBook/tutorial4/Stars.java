package javaBook.tutorial4;

public class Stars {
    public static void main(String[] args) {
        int counter = 0;
        for (int i = 0; i < 5; i++) {
            counter = i;
            if (counter == 3) {
                continue;
            }
            System.out.print("Counter - " + counter + ": ");
            System.out.println("* * * * *");

        }
    }
}
