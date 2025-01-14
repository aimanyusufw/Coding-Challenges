package codewars.challange.kyu8;

// Codewars 6
// Title :  Remove exclamation marks
// Instructions :  remove exclamation marks
// Challange Url :  https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions/java
// Level : 8kyu

public class ExclamationMarks {
    // Method 1
    // static String removeExclamationMarks(String s) {
    // StringBuilder filtered = new StringBuilder();
    // for (char c : s.toCharArray()) {
    // if (c != '!') {
    // filtered.append(c);
    // }
    // }
    // return filtered.toString();
    // }

    // Method 2
    static String removeExclamationMarks(String s) {
        return s.replaceAll("[!]", "");
    }

    // Other user method
    // static String removeExclamationMarks(String s) {
    // return (s == null) ? null : s.replace("!", "");
    // }
}
