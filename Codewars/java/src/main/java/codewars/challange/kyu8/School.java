package codewars.challange.kyu8;

import java.util.stream.IntStream;

// Codewars 7
// Title :  Get the mean of an array
// Instructions :   Return the average of the given array rounded down to its nearest integer.
// Challange Url :  https://www.codewars.com/kata/563e320cee5dddcf77000158/train/java
// Level : 8kyu

public class School {
    // method 1
    // public static int getAverage(int[] marks) {
    // int sum = 0;
    // for (var n : marks) {
    // sum += n;
    // }
    // return sum / marks.length;
    // }

    // method 2
    public static int getAverage(int[] marks) {
        return IntStream.of(marks).sum() / marks.length;
    }

    // Other user method
    // public static int getAverage(int[] marks) {
    // return (int) Arrays.stream(marks).average().orElse(Double.NaN);
    // }
}