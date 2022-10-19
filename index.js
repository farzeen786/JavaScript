// 1. Ways To Print In JS
// alert("Hello World");
// console.log("Hello World");
// document.write("This is Document");

// 2.JS Console API
// console.warn("This is warning");
// console.error("This is error");
// console.clear();
// console.assert(4>6);

//3. JS Variables
//Containers to stores Data Values
var num1 = 56;
var num2 = 34;
// console.log(num1+num2);

//4. DataTypes in JS
//.Numbers
var n1 = 16;
var n2 = 14.5;
// console.log(n1+n2);
//.Strings
var str1 = "This is a string";
var str2 = "This is a string 2";
// console.log(str1 +" "+ str2);
//.Objects
var marks = {
  farzeen: 50,
  ali: 40,
  rizzu: 80,
};
// console.log(marks);
//.Booleans
var a = true;
var b = false;
// console.log(a,b);
//.Undefined
var und = undefined;
// console.log(und);
//.Null
var n = null;
// console.log(n);

//Primitive Datatypes In JavaScript
//Arrays
var arr = [1, 2, "farzeen", 4, 5];
// console.log(arr);

//Operators in JavaScript
//Addition, Subtraction, Multiplication, Division, Modulus,
var a = 100;
var b = 10;
// console.log("The Value of a+b is: ",a+b);
// console.log("The Value of a-b is: ",a-b);
// console.log("The Value of a*b is: ",a*b);
// console.log("The Value of a/b is: ",a/b);
// console.log("The Value of a%b is: ",a%b);
//Assignment Operators
var c = 5;
// console.log(c);
c += 5;
// console.log(c);

//Comparison Operators
// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a<b);
// console.log(a>b);

//Logical Operators
//And && Operator
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);
//OR || Operator
// console.log(true||true);
// console.log(true||false);
// console.log(false||true);
// console.log(false||false);
//NOT ! Operators
// console.log(!true);
// console.log(!false);

//Functions In JS
function avg(a, b) {
  return a + b;
}
c1 = avg(4, 6) / 2;
c2 = avg(10, 20) / 2;
// console.log(c1,c2);

//Conditionals In JavaScript
//if and else
// var age = 18;
// if(age>15)
// {
//     console.log("You can cast Your Vote");
// }
// else
// {
//     console.log("You can Drink BornVita");
// }

//Loops in JS
//For Loop
// for(var i = 0; i<5; i++)
// {
//     console.log(a);
//     a++;
// }
// var i =0;
//While loop
// while(i<5){
//     console.log(++a);
//     i++;
// }
//Do-while loop
// do{
//     console.log(++a);
//     i++;
// }
// while(i<5);
//For-Each Loop
// var arr = [1, 2, 3, 4, 5];
// arr.forEach(function (element) {
//   console.log(element);
// });
//Break and Continue Statements

//Date
let myDate = new Date();
console.log(myDate);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[1].classList.add("text-success");

let elemID = document.getElementById("click");
elemID.classList.add("bg-primary");

//Events in JS
function clicked()
{
  console.log("The Button Was Clicked");
}

window.onload = function(){
  console.log("The Document was Loaded");
}

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer,addEventListener('mouseup',function()
{
  document.querySelectorAll('.container')[1].innerHTML = prevHTML;
  console.log("Mouse up when clicked on container");
})
firstContainer,addEventListener('mousedown',function()
{
  document.querySelectorAll('.container')[1].innerHTML = "<b> We Have Clicked</b>";
  console.log("Mouse down when clicked on container");
})

//Arrow Function
sum = (a,b)=>{
  return a+b;
}
summm = sum(4,6);
console.log(summm);

// setTimeout and setinterval 
logIn = ()=>
{
  console.log("You are Login");
}
// setTimeout(logIn, 2000);
 setInterval(logIn, 2000);



















