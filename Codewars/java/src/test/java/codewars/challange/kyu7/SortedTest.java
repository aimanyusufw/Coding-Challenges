package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class SortedTest {

    @Test
    public void test1() {
        int[] array = new int[] { 1, 2 };
        assertEquals("yes, ascending", Sorted.isSortedAndHow(array));
    }

    @Test
    public void test2() {
        int[] array = new int[] { 15, 7, 3, -8 };
        assertEquals("yes, descending", Sorted.isSortedAndHow(array));
    }

    @Test
    public void test3() {
        int[] array = new int[] { 4, 2, 30 };
        assertEquals("no", Sorted.isSortedAndHow(array));
    }
}
