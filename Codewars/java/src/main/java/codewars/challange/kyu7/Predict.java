package codewars.challange.kyu7;

// Codewars 10
// Title :  Predict Your Age
// Instructions :  My grandfather always predicted how old people would get, and right before he passed away he revealed his secret
// Challange Url :  https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/java
// Level : 7kyu

public class Predict {
    // Method 1
    public static int predictAge(int age1, int age2, int age3, int age4, int age5, int age6, int age7, int age8) {
        int[] grandFathersAge = { age1, age2, age3, age4, age5, age6, age7, age8 };
        int res = 0;
        for (int age : grandFathersAge) {
            res += age * age;
        }
        return (int) Math.floor(Math.sqrt(res) / 2);
    }

    // Method 2

    // Other User Method
    // public static int predictAge(int... ages) {
    // return (int) Math.sqrt(of(ages).map(a -> a * a).sum()) / 2;
    // }
}
