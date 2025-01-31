package codewars.challange.kyu7;

import java.util.Arrays;

// Codewars 3
// Title :  Anagram Detection
// Instructions :  Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Challange Url : https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/java
// Level : 7kyu

public class Anagram {
    // Method 1
    public static boolean isAnagram(String a, String b) {
        if (a.length() != b.length())
            return false;
        char[] word1 = a.toLowerCase().toCharArray();
        char[] word2 = b.toLowerCase().toCharArray();

        Arrays.sort(word1);
        Arrays.sort(word2);
        return Arrays.equals(word1, word2);
    }

    // Method 2

    // Other User Method
    // public static boolean isAnagram(String a, String b) {
    // final char[] word1 = a.toLowerCase().toCharArray(), word2 =
    // b.toLowerCase().toCharArray();
    // Arrays.sort(word1);
    // Arrays.sort(word2);
    // return Arrays.equals(word1, word2);
    // }

}
