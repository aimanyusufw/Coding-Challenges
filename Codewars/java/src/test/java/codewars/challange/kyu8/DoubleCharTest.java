package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class DoubleCharTest {
    @Test
    void sampleTest() {
        assertEquals("SSttrriinngg", DoubleChar.doubleChar("String"));
        assertEquals("HHeelllloo  WWoorrlldd", DoubleChar.doubleChar("Hello World"));
        assertEquals("11223344!!__  ", DoubleChar.doubleChar("1234!_ "));
    }
}
