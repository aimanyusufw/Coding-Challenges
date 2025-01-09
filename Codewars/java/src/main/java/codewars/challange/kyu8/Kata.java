package codewars.challange.kyu8;

import java.util.Arrays;

// Codewars 2
// Title :  Sum without highest and lowest number
// Instructions :   Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element
// Challange Url :  https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/java
// Level : 8kyu

public class Kata {
    // Method 1
    // public static int sum(int[] numbers) {
    // if (numbers == null || numbers.length < 2) {
    // return 0;
    // }
    // int sum = 0;
    // int min = Integer.MAX_VALUE;
    // int max = Integer.MIN_VALUE;
    // for (int num : numbers) {
    // sum += num;
    // if (num < min) {
    // min = num;
    // }
    // if (num > max) {
    // max = num;
    // }
    // }
    // return sum - min - max;
    // }

    // Method 2
    public static int sum(int[] numbers) {
        if (numbers == null || numbers.length < 2) {
            return 0;
        }
        int sum = Arrays.stream(numbers).sum();
        int min = Arrays.stream(numbers).min().orElse(0);
        int max = Arrays.stream(numbers).max().orElse(0);
        return sum - min - max;
    }

    // Other User Method
    // public static int sum(int[] numbers) {
    // if (numbers == null || numbers.length <= 2)
    // return 0;
    // int sum = 0;
    // Arrays.sort(numbers);
    // for (int i = 1; i < numbers.length - 1; i++) {
    // sum += numbers[i];
    // }
    // return sum;
    // }
}
