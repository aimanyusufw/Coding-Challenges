package codewars.challange.kyu6;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import org.junit.jupiter.api.Test;


public class PlusOneArrayTest  {
    @Test
    public void exampleTests() {
        doTest(new int[]{2,3,9},   new int[]{2,4,0});
        doTest(new int[]{4,3,2,5}, new int[]{4,3,2,6});
        doTest(new int[]{1,-9},    null);
      }
      
      private static void doTest(final int[] arr, final int[] expected) {
        String arrAsString = Arrays.toString(arr);
        int[] actual = PlusOneArray.upArray(arr);
        assertArrayEquals(expected, actual, "Incorrect answer for arr = " + arrAsString);
      }
}
