package codewars.challange.kyu7;

// Codewars 18
// Title :  Most digits
// Instructions :   Find the number with the most digits.
// Challange Url : https://www.codewars.com/kata/58daa7617332e59593000006/train/java 
// Level : 7kyu

public class MostDigits {
    // Method 1
    public static int findLongest(int[] numbers) {
        int most = numbers[0];
        int mostDigit = String.valueOf(Math.abs(most)).length();
        for (int i = 1; i < numbers.length; i++) {
            int currentDigit = String.valueOf(Math.abs(numbers[i])).length();
            if (currentDigit > mostDigit) {
                most = numbers[i];
                mostDigit = currentDigit;
            }
        }
        return most;
    }

    // Method 2

    // Other User Method
    // public static int findLongest(int[] numbers) {
    // int index = 0;
    // for (int i = 0; i < numbers.length; i++) {
    // if (String.valueOf(Math.abs(numbers[i])).length() >
    // String.valueOf(Math.abs(numbers[index])).length()) {
    // index = i;
    // }
    // }
    // return numbers[index];
    // }
}
