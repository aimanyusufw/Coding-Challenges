package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

public class FizzBuzzArrayTest {
    @Test
    public void sampleTests() {
        String[] expected = { "1" };
        String[] actual = FizzBuzzArray.fizzBuzz(1);
        assertArrayEquals(expected, actual);
        expected = new String[] { "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz" };
        actual = FizzBuzzArray.fizzBuzz(10);
        assertArrayEquals(expected, actual);
    }
}
