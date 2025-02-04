package codewars.challange.kyu7;

import java.util.Arrays;
import java.util.stream.IntStream;

// Codewars 7
// Title :  Sorted? yes? no? how?
// Instructions :  You can assume the array will always be valid, and there will always be one correct answer.
// Challange Url : https://www.codewars.com/kata/580a4734d6df748060000045/train/java
// Level : 7kyu

public class Sorted {
    public static int[] sorted(int[] array, String type) {
        int[] sortedArray = Arrays.copyOf(array, array.length);
        for (int i = 0; i < sortedArray.length; i++) {
            for (int j = 0; j < (sortedArray.length - i - 1); j++) {
                if ((type.equals("asc") && sortedArray[j] > sortedArray[j + 1])
                        || (type.equals("desc") && sortedArray[j] < sortedArray[j + 1])) {
                    int temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                }
            }
        }
        return sortedArray;
    }

    // Method 1
    public static String isSortedAndHow(int[] array) {
        if (Arrays.equals(array, sorted(array, "asc"))) {
            return "yes, ascending";
        } else if (Arrays.equals(array, sorted(array, "desc"))) {
            return "yes, descending";
        }
        return "no";
    }

    // Method 2

    // Other User Method
    // public static String isSortedAndHow(int[] array) {
    // if (IntStream.range(0, array.length - 1).allMatch(i -> array[i] <= array[i +
    // 1]))
    // return "yes, ascending";

    // if (IntStream.range(0, array.length - 1).allMatch(i -> array[i] >= array[i +
    // 1]))
    // return "yes, descending";

    // return "no";
    // }
}
