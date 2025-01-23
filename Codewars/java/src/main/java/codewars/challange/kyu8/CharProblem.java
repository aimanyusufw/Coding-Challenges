package codewars.challange.kyu8;

// Codewars 15
// Title :  Parse nice int from char problem
// Instructions :    Write a program that returns the girl's age (0-9) as an integer.
// Challange Url :  https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/java
// Level : 8kyu

public class CharProblem {
    // Method 1
    public static int howOld(final String herOld) {
        return Character.getNumericValue(herOld.charAt(0));
    }

    // Method 2

    // Other User Method
    // public static int howOld(final String herOld) {
    // return Integer.parseInt(herOld.substring(0, 1));
    // }
}
