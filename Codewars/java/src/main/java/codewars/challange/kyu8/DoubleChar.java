package codewars.challange.kyu8;

// Codewars 8
// Title :  Double Char
// Instructions :   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Challange Url :  https://www.codewars.com/kata/56b1f01c247c01db92000076/train/java
// Level : 8kyu

public class DoubleChar {

    // Method 1
    public static String doubleChar(String s) {
        StringBuilder result = new StringBuilder();
        for (char c : s.toCharArray()) {
            result.append(c);
            result.append(c);
        }
        return result.toString();
    }

    // Method 2

    // Other User Method
    // public static String doubleChar(String s) {
    // return s.replaceAll(".", "$0$0");
    // }
}
