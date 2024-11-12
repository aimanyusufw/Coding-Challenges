// Codewars 18
// Title :  The coupon code
// Question :   Write a function called 'chechkCoupon' which verifies that a coupon code is valid and not expired
// Challange Url :  https://www.codewars.com/kata/539de388a540db7fec000642
// Level : 7kyu

// Method : 1
// export function checkCoupon(
//   enteredCode: string,
//   correctCode: string,
//   currentDate: string,
//   expirationDate: string
// ): boolean {
//   let isValid = false;
//   if (enteredCode === correctCode) {
//     isValid = true;
//   } else if (new Date(expirationDate) <= new Date(currentDate)) {
//     isValid = true;
//   }
//   return isValid;
// }

// Method : 2
export const checkCoupon = (
  eC: string,
  cC: string,
  cD: string,
  eD: string
): boolean => eC === cC && new Date(cD) <= new Date(eD);

// Other Users Method
// export function checkCoupon(
//   enteredCode: string,
//   correctCode: string,
//   currentDate: string,
//   expirationDate: string
// ): boolean {
//   const isValidCode = enteredCode === correctCode;
//   const isValidDate = new Date(currentDate) <= new Date(expirationDate);
//   return isValidCode && isValidDate;
// }
