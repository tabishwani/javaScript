
/* input output */

var name = "Escobar";
var age = 67;
var married = true;

console.log(typeof "Escobar");
console.log(typeof 67);
console.log(typeof true);

/* Sum of 2 numbers */

var a = 100;
var b = 56;

console.log(a + b);

/* Arthimetic operations */

var a = 100;
var b = 50;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);


/* Perimeter of rectangle */

var length = 25;
var width = 25;

console.log(2*length + 2*width);

/* Area of rectangle */

var length = 25;
var width = 25;

console.log(length * width);

/* Diameter, Circumference & Area of a circle */

var radius = 20;

console.log(2 * radius);
console.log(2*3.14*radius);
console.log(3.14 * radius * radius);


/* cm to m & km */

var length = 1000;

console.log(length/100);
console.log(length/100000);

/* Celsius to Fahrenheit */

var celsius = 200;
console.log(celsius * 9/5 + 32);

/* Fahrenheit to Celsius */

var fahrenheit = 200;
console.log((fahrenheit - 32) * 5/9);

/* Days into Years & Weeks */

var days = 600;

console.log(days/7);
console.log(days/365);

/* Power a^b */

var a = 9;
var b = 3;

console.log(Math.pow(a,b));

/* Square root */

var number = 200;

console.log(Math.sqrt(number));

/* Angle */

var angle1 = 20;
var angle2 = 40;

console.log(180 - (20+40));

/* Area when base and height are given */

var base = 20;
var height = 30;

console.log(base*height/2);

/* Area of Equilateral triangle */

var a = 20;

console.log((Math.sqrt(3)/4)*a*a);

/* Total, Average and Percentage */

var math = 60;
var science = 70;
var english = 80;
var socialScience = 70;
var drawing = 90;

var total = (math + science + english + socialScience + drawing);
var average = ((math + science + english + socialScience + drawing)/2);
var Percentage = (100 * total / 500 );

console.log(total, average , Percentage);

/* Simple Interest */

var p = 100;
var t = 2;
var r = 10;

console.log(p * r * t);

/* Compound Interest */

var p = 1000;
var t = 2;
var r = 3;
var n = 2;

console.log(p * (1 + r/n) ** n*t);
