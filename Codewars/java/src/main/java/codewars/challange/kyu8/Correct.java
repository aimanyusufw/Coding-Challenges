package codewars.challange.kyu8;

// Codewars 17
// Title :  Correct the mistakes of the character recognition software
// Instructions :   When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Challange Url :  https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/java
// Level : 8kyu

public class Correct {
    // Method 1
    public static String correct(String string) {
        return string.replace('1', 'I').replace('0', 'O').replace('5', 'S');
    }

    // Method 2

    // Other User Method
    // public static String correct(String string) {
    // return string.replace("5", "S").replace("0", "O").replace("1", "I");
    // }
}
