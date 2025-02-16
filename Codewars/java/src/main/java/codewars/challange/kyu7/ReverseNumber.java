package codewars.challange.kyu7;

// Codewars 19
// Title :  Reverse a Number
// Instructions :   Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
// Challange Url : https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/java
// Level : 7kyu

public class ReverseNumber {
    // Method 1
    public static int reverse(int number) {
        boolean isNegative = number < 0;
        String numberStr = String.valueOf(Math.abs(number));
        String res = "";

        for (int i = numberStr.length() - 1; i >= 0; i--) {
            res += numberStr.charAt(i);
        }
        Integer reversedNumber = Integer.parseInt(res);
        return isNegative ? -reversedNumber : reversedNumber;
    }

    // Method 2

    // Other User Method
    // public static int reverse(int number) {
    // int result = 0;
    // while (number != 0) {
    // result = result * 10 + number % 10;
    // number = number / 10;
    // }
    // return result;
    // }
}
