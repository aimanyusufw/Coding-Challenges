package codewars.challange.kyu8;

// Codewars 10
// Title :  Removing Elements
// Instructions :   Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Challange Url :  https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/java
// Level : 8kyu

public class RemoveEveryOther {

    // Method 1
    public static Object[] removeEveryOther(Object[] arr) {
        Object[] result = new Object[(arr.length + 1) / 2];
        var index = 0;
        for (int i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                result[index++] = arr[i];
            }
        }
        return result;
    }

    // Method 2

    // Other User Method
    // public static Object[] removeEveryOther(Object[] arr) {
    // return IntStream.range(0, arr.length).filter(n -> n % 2 == 0).mapToObj(i ->
    // arr[i]).toArray();
    // }
}