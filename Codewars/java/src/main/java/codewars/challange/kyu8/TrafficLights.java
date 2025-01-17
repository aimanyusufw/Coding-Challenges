package codewars.challange.kyu8;

// Codewars 9
// Title :  Thinkful - Logic Drills: Traffic light
// Instructions :   You're writing code to control your town's traffic lights. 
// Challange Url :  https://www.codewars.com/kata/58649884a1659ed6cb000072/train/java
// Level : 8kyu

public class TrafficLights {

    // Method 1
    // public static String updateLight(String current) {
    // var result = "";
    // switch (current) {
    // case "green":
    // result = "yellow";
    // break;
    // case "yellow":
    // result = "red";
    // break;
    // case "red":
    // result = "green";
    // break;
    // }
    // return result;
    // }

    // Method 2
    public static String updateLight(String current) {
        var result = "";
        switch (current) {
            case "green" -> result = "yellow";
            case "yellow" -> result = "red";
            case "red" -> result = "green";
        }
        return result;
    }

    // Other User Method
    // public static String updateLight(String current) {
    // return (current.equals("red") ? "green" : current.equals("yellow") ? "red" :
    // "yellow");
    // }

}
