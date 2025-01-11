package codewars.challange.kyu8;

// Codewars 3
// Title :  Area or Perimeter
// Instructions :   If it is a square, return its area. If it is a rectangle, return its perimeter.
// Challange Url :  https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/java
// Level : 8kyu

public class Solution {
    // Method 1
    // public static int areaOrPerimeter(int l, int w) {
    // int result = 0;
    // if (l == w) {
    // result = l * w;
    // } else {
    // result = 2 * (l + w);
    // }
    // return result;
    // }

    // Method 2
    public static int areaOrPerimeter(int l, int w) {
        return l == w ? l * w : 2 * (l + w);
    }

    // Other User Method
    // public static int areaOrPerimeter (int a, int b) {
    // return a == b ? a * b : 2 * ( a + b );
    // }
}
