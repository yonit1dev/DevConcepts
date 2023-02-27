package javaBook.tutorial2;

public class Variables {
    public static void main(String[] args) {
        int score, hits; // declaration of two integervariables on the same line
        char level; // char variable
        final int maxScore = 100;

        score = 0;
        hits = 1;
        level = 'A'; // initial value

        System.out.println("Max Score: " + maxScore);

        System.out.println("Score: " + score);
        System.out.println("Hits: " + hits);
        System.out.println("Level: " + level);

        level = 'C';
        System.out.println("New Level: " + level);

        int x = 1;
        int y;

        y = x++; // y is 1 and x is 2
        System.out.println(x);
        System.out.println(y);

        y = ++x; // y and x are three
        System.out.println(x);
        System.out.println(y);
    }
}