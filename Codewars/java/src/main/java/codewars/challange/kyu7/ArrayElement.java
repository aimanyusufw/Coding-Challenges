package codewars.challange.kyu7;

import java.util.Arrays;

// Codewars 8
// Title :  Array element parity
// Instructions :  In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive
// Challange Url : https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/java
// Level : 7kyu

public class ArrayElement {
    // Method 1
    public static int solve(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            boolean hasPair = false;
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] == -arr[j] && i != j) {
                    hasPair = true;
                    break;
                }
            }
            if (!hasPair) {
                return arr[i];
            }
        }
        return 0;
    }

    // Method 2

    // Other User Method
    // public static int solve(int [] arr){
    // return Arrays.stream(arr).distinct().sum();
    // }
}
