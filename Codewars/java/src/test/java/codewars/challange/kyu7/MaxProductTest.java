package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class MaxProductTest {
    MaxProduct m = new MaxProduct();

    private void test(int expected, int actual) {
        assertEquals(expected, actual);
    }

    @Test
    public void fixedTests() {
        test(40, m.adjacentElementsProduct(new int[] { 5, 8 }));
        test(6, m.adjacentElementsProduct(new int[] { 1, 2, 3 }));
        test(90, m.adjacentElementsProduct(new int[] { 1, 5, 10, 9 }));
        test(48, m.adjacentElementsProduct(new int[] { 4, 12, 3, 1, 5 }));
        test(6, m.adjacentElementsProduct(new int[] { 5, 1, 2, 3, 1, 4 }));

        test(21, m.adjacentElementsProduct(new int[] { 3, 6, -2, -5, 7, 3 }));
        test(50, m.adjacentElementsProduct(new int[] { 9, 5, 10, 2, 24, -1, -48 }));
        test(30, m.adjacentElementsProduct(new int[] { 5, 6, -4, 2, 3, 2, -23 }));
        test(-14, m.adjacentElementsProduct(new int[] { -23, 4, -5, 99, -27, 329, -2, 7, -921 }));
        test(6, m.adjacentElementsProduct(new int[] { 5, 1, 2, 3, 1, 4 }));

        test(0, m.adjacentElementsProduct(new int[] { 1, 0, 1, 0, 1000 }));
        test(6, m.adjacentElementsProduct(new int[] { 1, 2, 3, 0 }));
    }
}
