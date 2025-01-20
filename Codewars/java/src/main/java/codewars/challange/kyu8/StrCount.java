package codewars.challange.kyu8;

// Codewars 13
// Title :  All Star Code Challenge #18
// Instructions :    Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// Challange Url :  https://www.codewars.com/kata/5865918c6b569962950002a1/train/java
// Level : 8kyu

public class StrCount {

    // Method 1
    // public static int strCount(String str, char letter) {
    // int count = 0;
    // for (char c : str.toCharArray()) {
    // if (c == letter) {
    // count++;
    // }
    // }
    // return count;
    // }

    // Method 2
    public static int strCount(String str, char letter) {
        long count = str.chars().filter(c -> c == letter).count();
        return (int) count;
    }

    // Other User Method
    // public static int strCount(String str, char letter) {
    // return (int) str.chars().filter(x -> x == letter).count();
    // }
}