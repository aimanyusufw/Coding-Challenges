package codewars.challange.kyu7;

// Codewars 4
// Title :  Factorial
// Instructions :  Write a function to calculate factorial for a given input
// Challange Url : https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/java
// Level : 7kyu

public class Factorial {
    // Method 1
    public int factorial(int n) {
        if (n < 0 && n >= 12)
            throw new IllegalArgumentException();
        return n <= 1 ? 1 : factorial(n - 1) * n;
    }

    // Method 2

    // Other User Method
    // public int factorial(int n) {
    // if (n < 0 || n > 12)
    // throw new IllegalArgumentException("Useless fuffery!");
    // return n <= 1 ? 1 : n * factorial(n - 1);
    // }
}
