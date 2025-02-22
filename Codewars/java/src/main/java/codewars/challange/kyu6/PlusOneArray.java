package codewars.challange.kyu6;

// Codewars 4
// Title :  +1 Array
// Instructions :  Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
// Challange Url : https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/java
// Level : 6 kyu

import java.math.BigInteger;

public class PlusOneArray {
    // Method 1
    public static int[] upArray(final int[] arr){
        if (arr.length == 0) return null;
        StringBuilder strNum = new StringBuilder();
        for (int digit: arr) {
            if(digit < 0 || digit>9) return null;
            strNum.append(digit);
        }
        BigInteger num = new BigInteger(strNum.toString());
        num = num.add(BigInteger.ONE);
        String result = num.toString();
        int[] newDigits = new int[result.length()];
        for (var i = 0; i < result.length(); i++) {
            newDigits[i] = result.charAt(i) - '0';
            
        }
        return newDigits;
    }

    // Method 2

    // Other User Method 
    // public static int[] upArray(int[] x) { 
    //     int n =x.length; int min=9;
    //     if(n==0)return null;
    //     for(int i=n-1,j=0;i>=0;i--){
    //       if(x[i]>-1&&x[i]<10){
    //          min=Math.min(min,x[i]);
    //          if(i==n-1)x[i]++;
    //          int end =(x[i]+j)%10;
    //          j=x[i]/10;
    //          x[i]=end;
    //       }
    //       else return null;
    //     }
    //     int set [] = new int [n+1]; set[0]=1;
    //     return min==9?set:x;
    //   }
}
