// Codewars Even or odd
// Title : Even or odd
// Question : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Challange Url : https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Level : 8kyu

public class Kata {
    // Method
    public static String evenOrOdd(int numbers) {
        return (numbers % 2 == 0) ? "Even" : "Odd";
    }

    // Debug and log
    public static void main(String[] args) {
        System.err.println(evenOrOdd(1));
        System.err.println(evenOrOdd(2));
        System.err.println(evenOrOdd(-1));
        System.err.println(evenOrOdd(-2));
        System.err.println(evenOrOdd(0));
    }
}
