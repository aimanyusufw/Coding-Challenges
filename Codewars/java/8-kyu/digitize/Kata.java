// Codewars 1
// Title : Convert number to reversed array of digits
// Question : Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Challange Url : https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// Level : 8kyu

// Method : 1
public class Kata {
    public static int[] digitize(long number) {
        if (number == 0) {
            return new int[] { 0 };
        }
        int length = (int) Math.log10(number) + 1;
        int[] result = new int[length];
        int index = 0;
        while (number > 0) {
            result[index++] = (int) (number % 10);
            number /= 10;
        }
        return result;
    }

    public static void main(String[] args) {
        long number = 348597;
        int[] result = digitize(number);
        for (int digit : result) {
            System.out.print(digit + " ");
        }
    }
}

// Method : 2

// Other Users Method
