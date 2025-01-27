package codewars.challange.kyu8;

import java.util.Arrays;

// Codewars 19
// Title :  Find numbers which are divisible by given number
// Instructions :   Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor
// Challange Url :  https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/java
// Level : 8kyu

public class EvenNumbers {

    // Method 1
    public static int[] divisibleBy(int[] numbers, int devider) {
        return Arrays.stream(numbers).filter(num -> num % devider == 0).toArray();
    }

    // Method 2

    // Other User Method
    // public static int[] divisibleBy(int[] numbers, int divider) {
    // int count = 0;
    // for (int number : numbers){
    // if (number % divider == 0){
    // count ++;
    // }
    // }
    // int[] arr = new int[count];
    // int i = 0;
    // for (int number : numbers){
    // if (number % divider == 0){
    // arr[i] = number;
    // i++;
    // }
    // }
    // return arr;
    // }
}
