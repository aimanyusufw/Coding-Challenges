package codewars.challange.kyu7;

// Codewars 21

import java.util.Collections;

// Title :  Build a square
// Instructions :  I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Challange Url : https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/java
// Level : 7kyu

public class Square {
    // Method 1
    // public static String generateShape(int n){
    //     String[] square = new String[n];
    //     String row = "+".repeat(n);
    //     for (int i = 0; i < n; i++) {
    //         square[i] = row;
    //     }            
    //     return String.join("\n",square);
    // }
    
    // Method 2
    public static String generateShape(int n){
        return String.join("\n",Collections.nCopies(n, "+".repeat(n)));

    }

    // Other User Method
    // public static final String generateShape(int n) {
    //     return ("+".repeat(n) + "\n").repeat(n).trim();
    // }
}