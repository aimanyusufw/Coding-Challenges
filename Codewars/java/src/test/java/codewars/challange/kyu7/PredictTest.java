package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class PredictTest {
    @Test
    public void FixedTests() {
        assertEquals(86, Predict.predictAge(65, 60, 75, 55, 60, 63, 64, 45));
        assertEquals(79, Predict.predictAge(32, 54, 76, 65, 34, 63, 64, 45));
    }
}
