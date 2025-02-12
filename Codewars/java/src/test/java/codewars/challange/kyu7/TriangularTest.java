package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class TriangularTest {
    @Test
    public void fixedTests() {
        assertEquals(3, Triangular.triangular(2));
        assertEquals(10, Triangular.triangular(4));
        assertEquals(813450, Triangular.triangular(1275));
        assertEquals(0, Triangular.triangular(0));
        assertEquals(0, Triangular.triangular(-1));
    }
}
