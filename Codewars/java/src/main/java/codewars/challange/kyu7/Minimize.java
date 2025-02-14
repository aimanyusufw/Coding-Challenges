package codewars.challange.kyu7;

import java.util.Arrays;

// Codewars 17
// Title :  Minimize Sum Of Array (Array Series #1) 
// Instructions :   Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Challange Url :  https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/java
// Level : 7kyu

public class Minimize {
    // Method 1
    public static int minSum(int[] passed) {
        Arrays.sort(passed);
        int arrayLen = passed.length;
        int result = 0;
        for (int i = 0; i < arrayLen / 2; i++) {
            result += passed[i] * passed[arrayLen - 1 - i];
        }
        return result;
    }

    // Method 2

    // Other User Method
    // public static int minSum(int[] passed) {
    // Arrays.sort(passed);
    // int sum = 0;
    // for (int i = 0; i < passed.length / 2; i++) {
    // sum += passed[i] * passed[passed.length - i - 1];
    // }
    // return sum;
    // }
}
