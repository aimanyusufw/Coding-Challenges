package codewars.challange.kyu6;

// Codewars 7
// Title :  Dashatize it
// Instructions :  Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.
// Challange Url : https://www.codewars.com/kata/58223370aef9fc03fd000071/train/java
// Level : 6 kyu

public class Dashatize {
    // Method 1
    public static String dashatize(int num) {
        String stringNum = String.valueOf(num).replace("-", "");
        StringBuilder result = new StringBuilder();
        for (int i =0;i < stringNum.length();i++) {
            char c = stringNum.charAt(i);
            int digit = Character.getNumericValue(c);

            if(digit % 2 == 1){
                if (result.length() > 0 && result.charAt(result.length() -1) != '-') {
                    result.append("-");
                }
                result.append(digit);
                if(i < stringNum.length() -1 && stringNum.charAt(i + 1) != '-'){
                    result.append("-");
                }
            }else {
                result.append(digit);
            }
        }
        return result.toString().replaceAll("^-|-$", "");
    }


    // Method 2

    // Other User Method 
    // public static String dashatize(int num) {
    //     return Integer.toString(num).replaceAll("([13579])","-$1-").replaceAll("--","-").replaceAll("^-","").replaceAll("-$","");
    // }
}