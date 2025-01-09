package codewars.challange.kyu8;

// Codewars 1
// Title : Array plus array
// Instructions : i'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements
// Challange Url :  https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/java
// Level : 8kyu

public class Sum {
    // Method 1
    public static int sumArray(int[] array) {
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        return sum;
    }

    public static int arrayPlusArray(int[] arr1, int[] arr2) {
        return sumArray(arr1) + sumArray(arr2);
    }

    // Method 2

    // Other User Method
    // public static int arrayPlusArray(int[] arr1, int[] arr2) {
    // return IntStream.of(arr1).sum() + IntStream.of(arr2).sum();
    // }
}
