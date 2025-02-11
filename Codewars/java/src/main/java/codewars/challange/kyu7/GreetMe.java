package codewars.challange.kyu7;

// Codewars 14
// Title :  Greet Me
// Instructions :  Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.    
// Challange Url :  https://www.codewars.com/kata/535474308bb336c9980006f2/train/java
// Level : 7kyu

public class GreetMe {
    // Method 1
    // public static String greet(String name) {
    // var newName = name.substring(0, 1).toUpperCase() +
    // name.substring(1).toLowerCase();
    // return "Hello " + newName + "!";
    // }

    // Method 2
    public static String greet(String name) {
        return "Hello " + name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase() + "!";
    }

    // Other User Method
    // public static String greet(String name) {
    // return String.format("Hello %s!", name.substring(0, 1).toUpperCase() +
    // name.substring(1).toLowerCase());
    // }
}