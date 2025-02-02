package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class LargestFiveDigitNumberTest {
    @Test
    public void exampleTests() {
        assertEquals(83910, LargestFiveDigitNumber.solve("283910"));
        assertEquals(67890, LargestFiveDigitNumber.solve("1234567890"));
        assertEquals(74765, LargestFiveDigitNumber.solve("731674765"));
    }
}
