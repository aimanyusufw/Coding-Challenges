package codewars.challange.kyu7;

import java.util.List;

// Codewars 2
// Title :  All Inclusive?
// Instructions :  Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots)
// Challange Url : https://www.codewars.com/kata/5700c9acc1555755be00027e/train/java
// Level : 7kyu

public class Rotations {
    // Method 1
    public static boolean containAllRots(String strng, List<String> arr) {
        if (strng.isEmpty())
            return true;

        int len = strng.length();
        for (int i = 0; i < len; i++) {
            String rotation = strng.substring(i) + strng.substring(0, i);
            if (!arr.contains(rotation)) {
                return false;
            }
        }
        return true;
    }

    // Method 2

    // Other User Method
    // public static Boolean containAllRots(String strng, List<String> arr) {
    // for (int i = 0; i < strng.length(); i++)
    // if (!arr.contains(strng.substring(i, strng.length()) + strng.substring(0,
    // i)))
    // return false;
    // return true;
    // }
}
