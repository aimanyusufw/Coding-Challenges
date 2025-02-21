package codewars.challange.kyu6;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;


public class TripleTest {
    @Test
    void sampleTests() {
        doTest(123123123L, 123123, 0);
        doTest(111, 88, 0);
        doTest(111000, 100, 1);
        doTest(111888, 1188, 1);
        doTest(451999277L, 41177722899L, 1);
        doTest(1222345L, 12345L, 0);
        doTest(12345L, 12345L, 0);
        doTest(666789L, 12345667L, 1);
        doTest(10560002L, 100L, 1);
        doTest(1112L, 122L, 0);
    }
    private static void doTest(long three, long two, int expected) {
        int actual = Triple.TripleDouble(three, two);
        assertEquals(expected, actual);
    }
}