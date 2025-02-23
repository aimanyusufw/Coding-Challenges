package codewars.challange.kyu6;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import org.junit.jupiter.api.Test;

public class Highest2FactorsTest {
    private static void testing(long[] actual, long[] expected) {
        assertArrayEquals(expected, actual);
    }

    @Test
    public void test1() {
        System.out.println("Basic Tests");
        testing(Highest2Factors.highestBiPrimeFac(2, 3, 50), 
                new long[] {48, 4, 1});
        testing(Highest2Factors.highestBiPrimeFac(5, 11, 1000), 
                new long[] {605, 1, 2});
        testing(Highest2Factors.highestBiPrimeFac(3, 13, 5000), 
                new long[] {4563, 3, 2});
        testing(Highest2Factors.highestBiPrimeFac(5, 7, 5000), 
                new long[] {4375, 4, 1});
    }   
}
