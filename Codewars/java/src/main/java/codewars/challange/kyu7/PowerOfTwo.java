package codewars.challange.kyu7;

// Codewars 16
// Title :  Power of two
// Instructions :   Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two.
// Challange Url :  https://www.codewars.com/kata/534d0a229345375d520006a0/train/java
// Level : 7kyu

public class PowerOfTwo {
    // Method 1
    public static boolean isPowerOfTwo(long n) {
        return n <= 0 ? false : (n & (n - 1)) == 0;
    }

    // Method 2

    // Other User Method
    // public static boolean isPowerOfTwo(long n) {
    // return 1 == Long.bitCount(n);
    // }
}