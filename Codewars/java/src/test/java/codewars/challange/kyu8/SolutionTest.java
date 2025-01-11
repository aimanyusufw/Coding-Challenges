package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    public void testSomething() {
        assertEquals(16, Solution.areaOrPerimeter(4, 4));
        assertEquals(32, Solution.areaOrPerimeter(6, 10));
    }
}
