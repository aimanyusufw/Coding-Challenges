package codewars.challange.kyu8;

// Codewars 18
// Title :  Is it even?
// Instructions :   Your code will determine if the number passed is even (or not). 
// Challange Url :  https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/java
// Level : 8kyu

public class Number {
    // Method 1
    public boolean isEven(double n) {
        return n % 2 == 0 && n == Math.floor(n);
    }

    // Method 2

    // Other User Method
    // public boolean isEven(double n) {
    // return n % 2 == 0;
    // }
}
