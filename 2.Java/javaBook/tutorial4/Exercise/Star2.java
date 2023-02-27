package javaBook.tutorial4.Exercise;

public class Star2 {
    public static void main(String[] args) {
        int rows = 3;
        int cols = 6;

        char star = '*';

        // rows
        for (int i = 0; i < rows; i++) {
            // columns
            for (int j = 0; j < cols; j++) {
                System.out.print(star);
                // last star space
                if (j == cols - 1) {
                    continue;
                }
                // space between stars
                System.out.print(" ");
            }
            System.out.println("");
        }
    }
}
