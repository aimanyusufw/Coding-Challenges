package codewars.challange.kyu7;

// Codewars 13
// Title :  Fizz Buzz
// Instructions :  Return an array containing the numbers from 1 to N, where N is the parametered value.
// Challange Url :  https://www.codewars.com/kata/5300901726d12b80e8000498/train/java
// Level : 7kyu

public class FizzBuzzArray {
    // Method 1
    public static String[] fizzBuzz(int n) {
        String[] array = new String[n];
        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                array[i - 1] = "FizzBuzz";
            } else if (i % 5 == 0) {
                array[i - 1] = "Buzz";
            } else if (i % 3 == 0) {
                array[i - 1] = "Fizz";
            } else {
                array[i - 1] = "" + i;
            }
        }
        return array;
    }

    // Method 2

    // Other User Method
    // static String[] fizzBuzz(int n) {
    // return rangeClosed(1, n)
    // .mapToObj(i -> i % 15 < 1 ? "FizzBuzz" : i % 3 < 1 ? "Fizz" : i % 5 < 1 ?
    // "Buzz" : i + "")
    // .toArray(String[]::new);
    // }
}
