package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class AlphabetTest {
    @Test
    public void BasicTest() {
        assertEquals("Right side wins!", Alphabet.alphabetWar("z"));
        assertEquals("Let's fight again!", Alphabet.alphabetWar("zdqmwpbs"));
        assertEquals("Right side wins!", Alphabet.alphabetWar("zzzzs"));
        assertEquals("Left side wins!", Alphabet.alphabetWar("wwwwwwz"));
    }
}
