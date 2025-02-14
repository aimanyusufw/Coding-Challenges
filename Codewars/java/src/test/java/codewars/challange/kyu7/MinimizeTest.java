package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class MinimizeTest {
    @Test
    public void basicTests() {
        assertEquals(22, Minimize.minSum(new int[] { 5, 4, 2, 3 }));
        assertEquals(342, Minimize.minSum(new int[] { 12, 6, 10, 26, 3, 24 }));
        assertEquals(74, Minimize.minSum(new int[] { 9, 2, 8, 7, 5, 4, 0, 6 }));
    }
}
