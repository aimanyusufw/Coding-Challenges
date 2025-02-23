package codewars.challange.kyu6;

// Codewars 5
// Title :  Highest number with two prime factors
// Instructions :  The numbers 6, 12, 18, 24, 36, 48 have a common property. They have the same two prime factors that are 2 and 3.
// Challange Url : https://www.codewars.com/kata/55f347cfb44b879e1e00000d/train/java
// Level : 6 kyu

public class Highest2Factors {
    // Method 1
    public static long[] highestBiPrimeFac(long p, long q, long nMax) {
        long maxProduct = 0;
        int bestM = 0, bestN = 0;
        for (int m = 1; ; m++) {
            long pPower = (long) Math.pow(p, m);
            if (pPower > nMax) break; 
            for (int n = 1; ; n++) {
                long qPower = (long) Math.pow(q, n);
                long product = pPower * qPower;
                if (product > nMax) break; 
                if (product > maxProduct) {
                    maxProduct = product;
                    bestM = m;
                    bestN = n;
                }
            }
        }

        return new long[]{maxProduct, bestM, bestN};
    }

    // Method 2

    // Other User Method
    // public static long[] highestBiPrimeFac(long p1, long p2, long n) {
    //     // your code
    //     long []l = new long[3];
    //     long max = p1*p2, k1=1, k2=1;
    //     double x1= Math.floor(Math.log(n)/Math.log(p1));
    //     double x2= Math.floor(Math.log(n)/Math.log(p2));
    //     for(double i=1;i<=x1;i++){
    //         for(double j=1;j<=x2;j++) {
    //             if(Math.pow(p1,i)*Math.pow(p2,j) > max && Math.pow(p1,i)*Math.pow(p2,j) < n){
    //                 max = (long)(Math.pow(p1,i)*Math.pow(p2,j));
    //                 k1 = (long) i;
    //                 k2 = (long) j;
    //             }
    //         }
    //     }
    //     l[0]= max;
    //     l[1]= k1;
    //     l[2]=k2;
    //     return l;
    // }
}
