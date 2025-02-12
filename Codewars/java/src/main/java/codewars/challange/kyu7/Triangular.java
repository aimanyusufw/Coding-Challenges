package codewars.challange.kyu7;

// Codewars 15
// Title :  Triangular Treasure
// Instructions :   You need to return the nth triangular number. You should return 0 for out of range values
// Challange Url :  https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/java
// Level : 7kyu

public class Triangular {

    // Method 1
    public static long triangular(long n) {
        return n <= 0 ? 0 : (n * (n + 1)) / 2;
    }

    // Method 2

    // Other User Method
    // public static int triangular(int n) {
    // int result = 0;
    // for (int i = 1; i <= n; i++)
    // result += i;
    // return result;
    // }
}
