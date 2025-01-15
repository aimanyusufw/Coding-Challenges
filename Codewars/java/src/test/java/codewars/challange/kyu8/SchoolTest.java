package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class SchoolTest {
    @Test
    public void simpleTest() {
        assertEquals(2, School.getAverage(new int[] { 2, 2, 2, 2 }));
        assertEquals(3, School.getAverage(new int[] { 1, 2, 3, 4, 5 }));
        assertEquals(1, School.getAverage(new int[] { 1, 1, 1, 1, 1, 1, 1, 2 }));
    }
}
