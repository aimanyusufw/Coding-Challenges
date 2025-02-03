package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class PairSumTest {
    @Test
    public void basicTestCases() {
        assertEquals(42,
                PairSum.largestPairSum(new int[] { 10, 14, 2, 23, 19 }));
        assertEquals(0,
                PairSum.largestPairSum(new int[] { -100, -29, -24, -19, 19 }));
        assertEquals(10,
                PairSum.largestPairSum(new int[] { 1, 2, 3, 4, 6, -1, 2 }));
        assertEquals(-18,
                PairSum.largestPairSum(new int[] { -10, -8, -16, -18, -19 }));
    }
}
