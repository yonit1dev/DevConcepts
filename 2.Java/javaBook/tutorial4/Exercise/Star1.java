package javaBook.tutorial4.Exercise;

public class Star1 {
    public static void main(String[] args) {
        int rows = 6;
        int cols = 9;

        char star = '*';

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if ((i < 2 || i > 3) && j > 2) {
                    break;
                }
                System.out.print(star);
                System.out.print(" ");
            }
            System.out.println("");
        }
    }
}
