package codewars.challange.kyu8;

// Codewars 14
// Title :  Find the first non-consecutive number
// Instructions :    Your task is to find the first element of an array that is not consecutive.
// Challange Url :  https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/java
// Level : 8kyu

public class FirstNonConsecutive {

    // Method 1
    static Integer find(final int[] array) {
        Integer result = null;
        for (int i = 1; i < array.length; i++) {
            if (array[i] - 1 != array[i - 1]) {
                result = array[i];
                break;
            }
        }
        return result;
    }

    // Method 2

    // Other User Method
    // static Integer find(final int[] array) {
    // for (int i = 1; i < array.length; i++) {
    // if (array[i] - array[i - 1] != 1)
    // return array[i];
    // }
    // return null;
    // }
}