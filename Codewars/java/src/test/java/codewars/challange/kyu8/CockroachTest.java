package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class CockroachTest {
    @Test
    public void basicTests() throws Exception {
        Cockroach cockroach = new Cockroach();
        assertEquals(30, cockroach.cockroachSpeed(1.08));
        assertEquals(30, cockroach.cockroachSpeed(1.09));
        assertEquals(0, cockroach.cockroachSpeed(0));
    }
}
