package javaBook.tutorial8.Exercise;

public class TimeTable {
    private Booking[][] times;

    TimeTable(int numDays, int numPeriod) {
        this.times = new Booking[numDays][numPeriod];
    }

    public int numberOfDays() {
        return this.times.length;
    }

    public int numberOfPeriods() {
        return this.times[0].length;
    }

    public boolean makeBooking(int day, int period, Booking booking) {
        if (day < 0 || day > this.times.length) {
            System.out.println("Invalid day index");
            return false;
        }

        if (period < 0 || period > this.times[day].length) {
            System.out.println("Invalid period index");
            return false;
        }

        if (this.times[day][period] == null) {
            this.times[day][period] = booking;
            return true;
        } else {
            return false;
        }

    }

    public boolean cancelBooking(int day, int period) {
        if (day < 0 || day > this.times.length) {
            System.out.println("Invalid day index");
            return false;
        }

        if (period < 0 || period > this.times[day].length) {
            System.out.println("Invalid period index");
            return false;
        }

        if (this.times[day][period] == null) {
            return false;
        } else {
            this.times[day][period] = null;
            return true;
        }

    }

    public boolean isFree(int day, int period) {
        if (day < 0 || day > this.times.length) {
            System.out.println("Invalid day index");
            return false;
        }

        if (period < 0 || period > this.times[day].length) {
            System.out.println("Invalid period index");
            return false;
        }
        if (this.times[day][period] == null) {
            return true;
        } else {
            return false;
        }
    }

    public Booking getBooking(int day, int period) {
        if (day < 0 || day > this.times.length) {
            System.out.println("Invalid day index");
            return null;
        }

        if (period < 0 || period > this.times[day].length) {
            System.out.println("Invalid period index");
            return null;
        }
        if (this.times[day][period] == null) {
            return null;
        } else {
            return this.times[day][period];
        }
    }
}
