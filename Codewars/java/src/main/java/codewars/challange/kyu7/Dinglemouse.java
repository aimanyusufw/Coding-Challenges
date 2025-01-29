package codewars.challange.kyu7;

// Codewars 1
// Title :  FIXME: Get Full Name
// Instructions :  Fix the bug so we can all go home early.
// Challange Url : https://www.codewars.com/kata/597c684822bc9388f600010f/train/java
// Level : 7kyu

public class Dinglemouse {
    private String firstName;
    private String lastName;

    public Dinglemouse(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method 1
    public String getFullName() {
        return String.join(" ", firstName, lastName).trim();
    }

    // Method 2

    // Other User Method
    // public String getFullName() {
    // return (firstName + " " + lastName).trim();
    // }
}
