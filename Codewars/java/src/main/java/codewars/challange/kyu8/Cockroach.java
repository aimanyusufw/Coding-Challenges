package codewars.challange.kyu8;

// Codewars 12
// Title :  Beginner Series #4 Cockroach
// Instructions :    Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// Challange Url :  https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/java
// Level : 8kyu

public class Cockroach {
    // Method 1
    public int cockroachSpeed(double x) {
        return (int) Math.floor(x * 27.7778);
    }

    // Method 2

    // Other User Method
    // public int cockroachSpeed(double x) {
    // return (int) (x / 0.036);
    // }
}
