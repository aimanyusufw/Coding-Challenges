package codewars.challange.kyu7;

import java.util.Arrays;

// Codewars 6
// Title :  Largest pair sum in array
// Instructions :  Given a sequence of numbers, find the largest pair sum in the sequence.
// Challange Url : https://www.codewars.com/kata/556196a6091a7e7f58000018/train/java
// Level : 7kyu

public class PairSum {
    // Method 1
    // public static int largestPairSum(int[] numbers) {
    // for (int i = 0; i < numbers.length; i++) {
    // for (int j = 0; j < (numbers.length - i - 1); j++) {
    // if (numbers[j] < numbers[j + 1]) {
    // int temp = numbers[j];
    // numbers[j] = numbers[j + 1];
    // numbers[j + 1] = temp;
    // }
    // }
    // }
    // return numbers[0] + numbers[1];
    // }

    // Method 2
    public static int largestPairSum(int[] numbers) {
        Arrays.sort(numbers);
        return numbers[numbers.length - 1] + numbers[numbers.length - 2];
    }

    // Other User Method
    // public static int largestPairSum(int[] numbers) {
    // return Arrays.stream(numbers).map(x -> -x).sorted().map(x ->
    // -x).limit(2).sum();
    // }
}
