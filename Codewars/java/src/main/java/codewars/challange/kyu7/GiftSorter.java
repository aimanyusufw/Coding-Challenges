package codewars.challange.kyu7;
import java.util.Arrays;

// Codewars 20
// Title :  Sort the Gift Code
// Instructions :  Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
// Challange Url :  https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/java
// Level : 7kyu

class GiftSorter {
    // Method 1
    public String sortGiftCode(String code){
        char[] charArray = code.toCharArray();
        Arrays.sort(charArray);
        return new String(charArray);
    }

    // Method 2

    // Other User Method
    // public String sortGiftCode(String code) {
    //     return new String(code.chars().sorted().toArray(), 0, code.length());
    // }
}