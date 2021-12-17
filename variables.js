// let text = "all around the world"
// let letter = text.charAt(8);
// console.log(letter.touppercase())

// Activity 1
// let name = 'andrew';
// let age = 21;
// let favColor = 'red';

// console.log(`Hi, my name is ${name}. I am ${age} and my favourite color is ${favColor}`);

// age = 11;
// favColor = 'kayla';
// console.log(`Hi, my name is ${name}. I am ${age} and my favourite color is ${favColor}`);



// Activity 2
// let breakfast = "toast";
// let lunch = "chicken noodle Soup";
// let dinner = "jacket potato with beans";

// console.log(`Today I have had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner!`);

// breakfast = "cheerios";
// dinner = "pork loin butty";
// tea = "hotpot pie with chips";

// console.log(`Tomorrow I will be having ${breakfast} for breakfast, ${lunch} for lunch and my favourite ${dinner} for dinner! I can't wait!`)

// Activity 3
// To set two dates to two variables. We have to use the Date Object.
// const birthDay = new Date("05,05,2000")
// const todaysDate = new Date("2022,05 ,05");
// This calculates the difference but IN milliseconds.
// let diffInTime = birthDay.getTime() - todaysDate.getTime()
// To convert that to days we use this calculation.
// let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
// Finally, it is console logged out here using string template literals. 
// console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);



// // Activity 4
// space1 = "O"
// space2 = "O"
// space3 = "X"
// space4 = "X"
// space5 = "O"
// console.log("   |   |")
// console.log(${space1}  | ${space2} | )
// console.log("   |   |")
// console.log("-----------")
// console.log("   |   |")
// console.log(${space3}  | ${space4} |)
// console.log("   |   |")
// console.log("-----------")
// console.log("   |   |")
// console.log(${space5}  |   |)
// console.log("   |   |")
// console.log (`${space0}${i}${space0}${i}`);
// console.log (`${space1}${i}${space2}${i}${space3}`);
// console.log (`${space0}${i}${space0}${i}`);
// console.log(`${j}`);
// console.log (`${space0}${i}${space0}${i}`);
// console.log (`${space4}${i}${space5}${i}${space6}`);
// console.log (`${space0}${i}${space0}${i}`);
// console.log(`${j}`);
// console.log (`${space0}${i}${space0}${i}`);
// console.log (`${space7}${i}${space8}${i}${space9}`);
// console.log (`${space0}${i}${space0}${i}`);

// // Activity 1
// let age = 21;

// if (age > 18){
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// }

// // Activity 1
// let age = 26;
// let country = "UK";

// if (age > 20 && country === "UK"){
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// }


// Activity 2 

// let topping = "jalapeno";

// switch(topping){
//     case "pepperoni":
//     case "spicy chilli beef":
//     case "chicken":
//     case "chilli sauce":
//         console.log("These are important ingredients for my pizza!");
//         break;
//     case "peppers":
//     case "red onion":
//     case "bacon":
//         console.log(`I don't mind having ${topping} on my pizza. `);
//         break;
//        case pineapple
//     default:
//         console.log(`${topping} should not be on a pizza!`);
// }


// // Activity 3

// let password = "avengersassemble";

// if (password.length < 8){
//   console.log("This password is too short.");
// } else {
//   console.log(`Your new password is ${password}`);
// }

// Activity 3
// let num = 1;

// if (num % 3 == 0){
//   console.log("This number is divisble by 3.")
// } else if (num % 4 == 0){
//   console.log("This number is not divisble by 5.");
// }

// let num = 15;
// switch(true) {
//   case num % 5 == 0:
//     console.log("This number is divisble by 3.")
//     break;
//   case num % 3 == 0:
//     console.log("This number is divisble by 5.")
//     break;
//   default:
//     console.log("This number is divisble by 3 or 5.")
// }

// // Activity 4
// let num = 10;

// switch(true) {
//   case num % 5 == 0 && num % 3 == 0:
//     console.log("Fizz Buzz.")
//     break;
//   case num % 2 == 0:
//     console.log("Fizz.")
//     break;
//   case num % 5 == 0:
//     console.log("Buzz.")
//     break;
//   default:
//     console.log("This number is not divisble by 3 or 5.")
// }

// // Activity 5
// let num = 4004;
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

// // Activity 6
// let time = 8;
// let placeOfWork = "st helens"
// let townOfHome = "newton-le willows"

// if (time == 8){
//   console.log(`I am at work in ${placeOfWork}`);
// } else if (time == 7){
//   console.log(`I am at home in ${townOfHome}`);
// } else if (time == 9){
//   console.log(`I am at work in ${placeOfWork}`)
// } else {
//   console.log(`If it is between 10 and 7 I am at work in ${placeOfWork}. Otherwise, I'm at home in ${townOfHome}`);
// }

// // Activity 7
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
//  console.log(string.lastIndexOf(vowelArr[i]));
// gets index of vowel in current iteration
    // index = string.lastIndexOf(vowelArr[i]);
// compares current index to find highest index
// if (index >= highestIndex ){
// so new highestindex becomes index
    // highestIndex = index;
// won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }

// This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// This line logs the index number of the last vowel. 
// console.log(highestIndex)

// // Activity 8
// let word = "bang";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// Challenge 8
// let num1 = 11;
// let num2 = 26;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }