package codewars.challange.kyu8;

// Codewars 5
// Title :  Transportation on vacation
// Instructions :  Write a code that gives out the total amount for different days(d).
// Challange Url :  https://www.codewars.com/kata/568d0dd208ee69389d000016/train/java
// Level : 8kyu

public class RentalCarCost {
    // private static final int COST_PER_DAY = 40;

    // Method 1
    // public static int rentalCarCost(int d) {
    // int dayRentCost = 40;
    // int cost = 0;
    // if (d >= 7) {
    // cost = (dayRentCost * d) - 50;
    // } else if (d >= 3) {
    // cost = (dayRentCost * d) - 20;
    // } else {
    // cost = dayRentCost * d;
    // }
    // return cost;
    // }

    // Method 2
    public static int rentalCarCost(int d) {
        return d >= 7 ? (40 * d) - 50 : d >= 3 ? (40 * d) - 20 : 40 * d;
    }

    // Other user method
    // public static int rentalCarCost(int d) {
    // if (d < 3)
    // return d * COST_PER_DAY;
    // else if (d >= 7)
    // return d * COST_PER_DAY - 50;
    // else
    // return d * COST_PER_DAY - 20;
    // }
}
