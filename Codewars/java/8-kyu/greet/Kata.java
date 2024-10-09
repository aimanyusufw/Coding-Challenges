// Codewars 2
// Title : Returning Strings
// Question : Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// Challange Url : https://www.codewars.com/kata/55a70521798b14d4750000a4
// Level : 8kyu

// Kata Class
public class Kata {
    // Method 1
    public static String greet(String name) {
        return "Hello, " + name + " how are you doing today?";
    }

    // Method 2
    public static String greet2(String name) {
        return String.format("Hello, %s how are you doing today?", name);
    }

    // Log and debug
    public static void main(String args[]) {
        String name = "Aiman";
        System.out.println(greet(name));
        System.out.println(greet2(name));
    }
}
