package codewars.challange.kyu6;

// Codewars 3
// Title :  Triple Double
// Instructions :  Write a function which takes two integers num1 and num2 and returns 1 if there is a straight triple of a digit at any place in num1 and also a straight double of the same digit in num2.
// Challange Url : https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/java
// Level : 6 kyu


public class Triple {
    // Method 1
    public static int TripleDouble(long three ,long two){
        String str1 = String.valueOf(three);
        String str2 = String.valueOf(two);
        for (int i = 0; i < 10; i++) {
            String triple = String.valueOf(i).repeat(3);
            String doubleDigit = String.valueOf(i).repeat(2);
            if(str1.contains(triple) && str2.contains(doubleDigit)){
                return 1;
            }
        }
        return 0;
    }

    // Method 2

    // Other User Method
    // public static int TripleDouble(long num1, long num2) 
    // {
    //   String n1str = String.valueOf(num1);
    //   String n2str = String.valueOf(num2);
    //   for(int i=0;i<10;i++) {
    //     String n = String.valueOf(i);
    //     if( n1str.contains(n+n+n) && n2str.contains(n+n) ) return 1;
    //   }
    //   return 0;
    // }
}
