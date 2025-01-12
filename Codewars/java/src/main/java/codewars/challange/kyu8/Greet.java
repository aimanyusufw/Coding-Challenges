package codewars.challange.kyu8;

// Codewars 4
// Title :  Grasshopper - Personalized Message
// Instructions :   Create a function that gives a personalized greeting
// Challange Url :  https://www.codewars.com/kata/5772da22b89313a4d50012f7/java
// Level : 8kyu

public class Greet {
    // Method 1
    static String greet(String name, String owner) {
        return name.equals(owner) ? "Hello boss" : "Hello guest";
    }

    // Method 2

    // Other user method
    // static String greet(String name, String owner) {
    // return "Hello " + (name.equals(owner) ? "boss" : "guest");
    // }
}
