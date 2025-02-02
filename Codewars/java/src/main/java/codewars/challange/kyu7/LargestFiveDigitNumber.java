package codewars.challange.kyu7;

// Codewars 5
// Title :  Largest 5 digit number in a series
// Instructions :  Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given.
// Challange Url : https://www.codewars.com/kata/51675d17e0c1bed195000001/train/java
// Level : 7kyu

public class LargestFiveDigitNumber {
    // Method 1
    public static int solve(final String digit) {
        int maxNumber = 0;
        for (int i = 0; i <= digit.length() - 5; i++) {
            int num = Integer.parseInt(digit.substring(i, i + 5));
            maxNumber = Math.max(maxNumber, num);
        }
        return maxNumber;
    }

    // Method 2

    // Other User Method
    // public static int solve(final String digits) {
    // int largest = Integer.MIN_VALUE;
    // for (int i = 0; i <= digits.length() - 5; i++) {
    // int number = Integer.parseInt(digits.substring(i, i + 5));
    // largest = Math.max(number, largest);
    // }
    // return largest;
    // }
}
