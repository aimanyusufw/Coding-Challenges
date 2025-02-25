package codewars.challange.kyu6;


import java.util.ArrayList;
import java.util.List;

// Codewars 6
// Title :  Street Fighter 2 - Character Selection
// Instructions :  You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:
// Challange Url : https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/java
// Level : 6 kyu

public class StreetFighter {
    // Method 1
    public static String[] streetFighterSelection(String[][] fighters, int[] position, String[] moves) {
        int row = position[0];
        int col = position[1];
        List<String> selectedCharacters = new ArrayList<>();

        for (String move : moves) {
            switch (move) {
                case "up":
                    row = 0; // Tidak bisa lebih atas dari row 0
                    break;
                case "down":
                    row = 1; // Tidak bisa lebih bawah dari row 1
                    break;
                case "left":
                    col = (col == 0) ? 5 : col - 1; // Wrap-around ke kanan jika dari kiri
                    break;
                case "right":
                    col = (col == 5) ? 0 : col + 1; // Wrap-around ke kiri jika dari kanan
                    break;
            }
            selectedCharacters.add(fighters[row][col]);
        }
        return selectedCharacters.toArray(new String[0]);
    }

    // Method 2

    // Other User Method
    // public static String[] streetFighterSelection(String[][] fighters, int[] position, String[] moves){
    //     int x = position[1];
    //     int y = position[0];
    //     String[] result = new String[moves.length];
        
    //     for (int i = 0; i < moves.length; i++) {
    //       String mv = moves[i];
    //       switch(mv) {
    //         case "up":    y = 0; break;
    //         case "right": x = (x + 1) % 6; break;
    //         case "down":  y = 1; break;
    //         case "left":  x = (x + 5) % 6; break;
    //         default: break;
    //       }
          
    //       result[i] = fighters[y][x];
    //     }
    //     return result;
    //   }
}