package codewars.challange.kyu8;

import java.util.HashMap;
import java.util.Map;

// Codewars 20
// Title :  Welcome!
// Instructions :   Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Challange Url :  https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/java
// Level : 8kyu

public class Welcome {
    // Method 1
    public static String greet(String language) {
        Map<String, String> greetings = new HashMap<>();
        greetings.put("english", "Welcome");
        greetings.put("czech", "Vitejte");
        greetings.put("danish", "Velkomst");
        greetings.put("dutch", "Welkom");
        greetings.put("estonian", "Tere tulemast");
        greetings.put("finnish", "Tervetuloa");
        greetings.put("flemish", "Welgekomen");
        greetings.put("french", "Bienvenue");
        greetings.put("german", "Willkommen");
        greetings.put("irish", "Failte");
        greetings.put("italian", "Benvenuto");
        greetings.put("latvian", "Gaidits");
        greetings.put("lithuanian", "Laukiamas");
        greetings.put("polish", "Witamy");
        greetings.put("spanish", "Bienvenido");
        greetings.put("swedish", "Valkommen");
        greetings.put("welsh", "Croeso");

        return greetings.getOrDefault(language, greetings.get("english"));
    }

    // Method 2

    // Other User Method
    // public static String greet(final String language) {
    // String[][] database = { { "english", "Welcome" }, { "czech", "Vitejte" }, {
    // "danish", "Velkomst" },
    // { "dutch", "Welkom" }, { "estonian", "Tere tulemast" }, { "finnish",
    // "Tervetuloa" },
    // { "flemish", "Welgekomen" }, { "french", "Bienvenue" }, { "german",
    // "Willkommen" }, { "irish", "Failte" },
    // { "italian", "Benvenuto" }, { "latvian", "Gaidits" }, { "lithuanian",
    // "Laukiamas" }, { "polish", "Witamy" },
    // { "spanish", "Bienvenido" }, { "swedish", "Valkommen" }, { "welsh", "Croeso"
    // } };

    // for (int i = 0; i < database.length; i++) {
    // System.out.print(database[i][0] + " ");
    // if ((database[i][0]).toString() == language) {
    // return database[i][1].toString();
    // }
    // }

    // return "Welcome";
    // }
}
