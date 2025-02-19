package codewars.challange.kyu6;

// Codewars 1
// Title :  Validate Credit Card Number
// Instructions :  Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
// Challange Url : https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/java
// Level : 6 kyu

public class Validate {
    // Method 1
    public static boolean validate(String n){
        int res = 0;
        for (int i = n.length() -1; i >= 0; i--) {
            int digit = Integer.parseInt(String.valueOf(n.charAt(i)));
            if ((n.length() - i ) % 2==0) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            res += digit;
        }
        return res % 10 == 0;
    }

    // Method 2

    // Other User Method
    // public static boolean validate(String n) {
    //     final boolean[] flag = {(n.length() & 1) == 1};
    //     return Arrays.stream(
    //             n.split(""))
    //             .map(Integer::parseInt)
    //             .mapToInt(value -> value)
    //             .map(integer -> ((flag[0] ^= true) ? (integer * 2 - 1) % 9 + 1 : integer))
    //             .sum() % 10 == 0;
    // }
}
