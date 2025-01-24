package codewars.challange.kyu8;

// Codewars 16
// Title :  Switch it Up!
// Instructions :   When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.
// Challange Url :  https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/java
// Level : 8kyu

public class SwitchIt {

    // Method 1
    public static String switchItUp(int number) {
        String[] wordNumbers = { "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                "Ten" };
        return wordNumbers[number];
    }

    // Method 2

    // Other User Method
    // public static String switchItUp(int number) {
    // return new String[] {"Zero", "One", "Two", "Three", "Four", "Five", "Six",
    // "Seven", "Eight", "Nine"}[number];
    // }
}
