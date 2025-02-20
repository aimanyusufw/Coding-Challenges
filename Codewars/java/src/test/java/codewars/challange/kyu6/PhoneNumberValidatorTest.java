package codewars.challange.kyu6;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;


public class PhoneNumberValidatorTest  {
    @Test
  public void tests() {
    assertEquals(true, PhoneNumberValidator.validPhoneNumber("(123) 456-7890"));
    assertEquals(false, PhoneNumberValidator.validPhoneNumber("(1111)555 2345"));
    assertEquals(false, PhoneNumberValidator.validPhoneNumber("(098) 123 4567"));
  }
}
