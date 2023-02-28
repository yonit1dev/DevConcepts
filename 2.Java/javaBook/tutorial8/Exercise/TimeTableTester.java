package javaBook.tutorial8.Exercise;

public class TimeTableTester {
    public static void main(String[] args) {
        TimeTable eps = new TimeTable(5, 7);

        System.out.println("Number of days: " + eps.numberOfDays());
        System.out.println("Number of periods: " + eps.numberOfPeriods());

        boolean success = eps.makeBooking(1, 1, new Booking("12B", "Maths"));
        if (success) {
            System.out.println("Successfully booked - Maths.");
        } else {
            System.out.println("Failed to book - Maths.");
        }

        success = eps.makeBooking(2, 5, new Booking("12C", "English"));
        if (success) {
            System.out.println("Successfully booked - English.");
        } else {
            System.out.println("Failed to book - English.");
        }

        System.out.println(eps.getBooking(2, 5).getName()); // English
        System.out.println(eps.getBooking(0, 0)); // null

        System.out.println(eps.isFree(1, 1)); // false

        boolean canceled = eps.cancelBooking(2, 5); // true
        if (canceled) {
            System.out.println("Successfully canceled - English.");
        } else {
            System.out.println("Failed to cancel - English.");
        }

        System.out.println(eps.isFree(2, 5)); // free
    }
}
