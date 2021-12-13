// ДЗ МИНИМУМ
alert('So, Hi!');

/*let let=prompt("Add your name", ""); нельзя присвоить такое имя let, 
и другие из числа зарезервированных*/

let userName

do {
  userName = prompt("Add your name", "");

} while (!userName);

alert(`Nice to meet you, ${userName}!`);

//хотела задать правило обязательно ввод имени, если пусто - не пропускать дальше 
/* if (userName != null && userName != "") {
} else {
  alert('Plese enter your name!');
} */

// alert(`Let learn JavaScript together, ${userName}!`);

// Как изменить обычный текст по умолчанию "ок" на другой текст?
// let yourSkills = confirm(`I hope, you have some basic skills at JS, ${userName}?`);


// ДЗ НОРМА
// alert('So, next');
// КАК задать параметр, чтобы пользователь вводил только числ.значение, а если буквы - то ошибка


do {
  yourBirth = prompt("Let's find How old are you. Enter the year of your birth", '');

} while (!yourBirth);



const currentYear = '2021';

alert(`Greate! You are ${currentYear - yourBirth} y.o., ${userName}!`);


let continueIt = alert("So let's continue?");

do {
  countPerimeter = prompt("Let's find Perimeter of square. Enter the length of it", '');

} while (!countPerimeter);

alert(`You got ${countPerimeter * 4} Perimeter of square, ${userName}!`);

alert("Now the next task!");

do {
  countRadius = prompt("Enter any radius of circle here", '');

} while (!countRadius);

const PI = '3.14159'

alert(`Great! You got ${countRadius ** 2 * PI} the area of the circle, ${userName}!`);

alert("And now imagine that you need to get from city A to city B!");

do {
  countDistance = prompt("Enter the distance in kilometers here", '');

} while (!countDistance);

{

  countTime = prompt("And enter the time (hours) You want to get there", '');

} while (!countTime);

alert(`Therefore, your speed will be = ${countDistance / countTime} km/h to get there in time!, ${userName}!`);

alert("Finally, let's calculate the dollar-euro exchange rate for today!");

do {
  countRate = prompt("How many dollars do you want to exchange?", '');

} while (!countRate);

const rate = 0.88;

alert(`If to pay ${countRate} $ You will receive ${countRate * rate} euros, ${userName}!`);

alert("Thank you for your attention!");
