package codewars.challange.kyu7;

// Codewars 11
// Title :  Maximum Product
// Instructions :  Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array
// Challange Url :  https://www.codewars.com/kata/5a4138acf28b82aa43000117/java
// Level : 7kyu

public class MaxProduct {
    // Method 1
    public int adjacentElementsProduct(int[] array) {
        int max = array[0] * array[1];
        for (int i = 1; i < array.length - 1; i++) {
            int sum = array[i] * array[i + 1];
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }

    // Method 2

    // Other User Method
    // public int adjacentElementsProduct(int[] array) {
    // int ans = Integer.MIN_VALUE;
    // for (int i = 0; i < array.length-1; i++)
    // ans = Math.max(ans,array[i]*array[i+1]);
    // return ans;
    // }
}
