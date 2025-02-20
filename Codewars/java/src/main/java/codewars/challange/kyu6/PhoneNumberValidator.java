package codewars.challange.kyu6;

// Codewars 2

import java.util.regex.Pattern;

// Title :  Valid Phone Number
// Instructions :  Write a function that accepts a string, and returns true if it is in the form of a phone number. 
// Challange Url : https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/java
// Level : 6 kyu

public class PhoneNumberValidator {
    // Method 1
    public static boolean validPhoneNumber(String phoneNumber){
        String regex = "^\\(\\d{3}\\) \\d{3}-\\d{4}$";
        return Pattern.matches(regex, phoneNumber);
    }

    // Method 2

    // Other User Method
    // public static boolean validPhoneNumber(String phoneNumber) {
    //     return Pattern.matches("^\\(\\d{3}\\) \\d{3}-\\d{4}$", phoneNumber);
    // }
}
