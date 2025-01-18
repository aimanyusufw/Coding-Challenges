package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import java.util.Arrays;

import org.junit.jupiter.api.Test;

public class RemoveEveryOtherTest {

    private static void doTest(Object[] input, Object[] expected) {
        String message = "for array: " + Arrays.toString(input) + "\n";
        Object[] actual = RemoveEveryOther.removeEveryOther(input);
        assertArrayEquals(expected, actual, message);
    }

    @Test
    void basicTests() {
        doTest(new Object[] { "Hello", "Goodbye", "Hello Again" }, new Object[] { "Hello", "Hello Again" });
        doTest(new Object[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }, new Object[] { 1, 3, 5, 7, 9 });
        doTest(new Object[] { new Object[] { 1, 2 } }, new Object[] { new Object[] { 1, 2 } });
        doTest(new Object[] { "Goodbye" }, new Object[] { "Goodbye" });
    }
}
