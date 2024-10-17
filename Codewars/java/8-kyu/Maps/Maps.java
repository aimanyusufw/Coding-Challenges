// Codewars Maps
// Title : Beginner - Lost without map
// Question : Given an array of integers, return a new array with each value doubled.
// Challange Url : https://www.codewars.com/kata/57f781872e3d8ca2a000007e
// Level : 8kyu

// Import
import java.util.*;

public class Maps {

    // Method 1
    public static int[] map(int[] arr) {
        int[] doubledNumber = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            doubledNumber[i] = arr[i] + arr[i];
        }
        return doubledNumber;
    }

    // Other user method
    public static int[] map2(int[] arr) {
        return Arrays.stream(arr).map(x -> x * 2).toArray();
    }

    // Log and debug
    public static void main(String[] args) {

        int[] result = map(new int[] { 1, 2, 3 });

        for (int num : result) {
            System.err.println(num);
        }
    }
}
