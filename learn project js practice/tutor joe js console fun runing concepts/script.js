//single line commment line

 //alert("welcome")

 
 
 //@@@@@      CONSOLE CONCEPTS


// console.log("welcome to js");
// console.log(12345); 
// console.log("18.25");
// console.log(true);
// console.log([45,421,5431,514]);
// console.log({fname:'tamil',age:25});
// console.table({fname:'tamil',age:25});
// console.error("custome sample error")
// console.warn("custome sample error")
// //console.clear();
// console.time("Timer");
// for(i=0;i<=10;i++)
// {
//     console.log(i)
// }
// console.timeEnd("Timer");


//@@@@@@ NEXT CONCEPT IS GOING TO LEARN IS VAR LET CONST

 
/*1997
//VAR storing variables.....

2015 ES 6
//LET
CONST


//1.scope


var  is a global scope access in inner and outer


let const is onky done in inner bracket function alone..

//2;;VARIABLE REDECLARATION

// var a=25;
// console.log(a)
//  var a=20;
//  console.log(a)


 //let is used in only one time in the variable redeclaration

let a=20
console.log(a)*/


//next topic//3.value assignment....


// var a=25;
// console.log(a);
// var a=45;
// console.log(a);
//it will show both
//  a=25;
// console.log(a);

//second we a same let variable
//  a=20;
//  console.log(a);

 // yes the var and let work as same function it will run  and 
 //take the second element with out error.....
 
 
 //but in const take only the 1st varibale element
// 
//  const a=10
//  console.log(a);

 //but time we declare a varible it wll show error...

//  a=20;
//  console.log(a);



//in const we can reasign the const value
//we assume in const it will show eroor
//but in object we declare some key pair 
//values it will not show 
//error

// const student={'name':"tamil",'age':"23"}
// console.table(student);
// console.log(student.name);

// // //reasign the student name

// // student.name="arasan"
// console.log(student.name);


 

//4@@@@@@ primmitive data types......
/* string
number
boolean true or false
null
undefined
symbol e6*/

//symbols
//const s1=Symbol()  //jwfwfdjfFAS
//console.log(s1)

//const s2=Symbol() //23t8ruihfnef 
//console.log(s2)

//console.log(s1==s2);

//type conversion
//  a=true;
// console.log(a,typeof a);
// a=String(a)
// console.log(a,typeof a);


//type conversion string to number.....


// a="125";
// console.log(a,typeof a);
// a=Number(a)
// console.log(a,typeof a);

// a=true;
// console.log(a,typeof a);
// a=Number(a)
// console.log(a,typeof a);


// a="35.55";
// console.log(a,typeof a);
// a=parseInt(a);
// console.log(a,typeof a);

//  a="35.55";
//   console.log(a,typeof a);
//  a=parseFloat(a);
// console.log(a,typeof a);

//type coercion

// let a="30";
// let b=10;
// console.log(a+b);

// a=Number(a);
// console.log(a+b);


// x=!









//arithematic operation
            //addition,sub,mul,divi,modulus.....

//assignment operator

// let a=10;

// a=a+5

// a+=5;
// a-=5;
// a*=5;
// a/=5;
// a%=5;
// console.log(a);

//math functions

// let c;
// c=Math.PI;
// c=Math.E;
//.round
//floor
//ceil
//sqrt
//abs
//min value
//max vakue
//.random(it will give random values in the console...)
// console.log(c);


//comparision operator...


// let e=10;
// let f="20";
// console.log(e==f);
// console.log(e===f);
// console.log(e!=f);

//relational operators in js.....

/*
>
<
>=
<=
*/

// let a=10;
// let b=20

// console.log(a<=b);

 


//logical operator.......

/*
 logical and &&
or ||
not !=

*/


// let mark=105;
// console.log (mark>=35 && mark<=100)


//or
// let a=5;
// console.log(a==2 || a==5);

// //not logical operator

// a=false;
// console.log(!a);



//next topic is strict operator or identity operator


// === function in this case is compulsory need 
 //two operators in same types 





 //@@@@@ext topic is ternary operators   ?!  @@@@@@@@@
// const age=10;
// const result=age>=18?"eligible":"not eligible";
// console.log(result)

//Handling null values

// function welcome(name){
//   const result=name?name:"no name";
//   console.log("welcome"+ result);
// }
// welcome(null);
// welcome();
// welcome('tamil');

// //objects code null function  

// user={'name':"tamil",'age':"23"};
// console.log(user);
// console.log(user.age);

// const greeting=(user) =>//arrow function
// {
//  const name=user.name?user.name:"no name";
//  return "hello"+ name;
 
// }
// console.log(greeting(user));


//condtional chain
/*
multi chain using condtions

*/


// const avg=80;
// const grade=avg>=90? "A Grade":avg>=80?"b grade":"c grade";
// console.log("Grade :" ,grade);  






//ternary operator is a single line conceot to get output by using the 
//ternarry operator in ? we can do multi level process of value assign
//  




//@@@@@TELUSKO@@@@@@@@@@@@@ YOU TUBE CHANNEL///
//TUTORIALS/VIDEOS/

//VARIABLES TOPICS
//AND ALSO USE THE VARIABLES IN THE  ONE TIME in THE CODE TO DECLARE.....




//DATA TYPS IN JAVA SCRIPT
// let num1=5.6
// console.log(typeof num1)

//number data types
  
// let firstName="tamil"
// let lastName="arasan"
// console.log()
  

//ecma internationL
//ECMA SCRIPTS IS A LANGAUGE AND THEN IN ONE CODE TO DECLARE VARIABLES TOPICS
//TO LEARN data types in java script/////////// //


//condtional operator in js 
//if else statement condtition
//  let num1=6;
//  let num2=9;
//  let num3=7;
 
//     if(num1 < num2 && num1 >num3)
//     {

// console.log("num1 is greatest");
//  }
//    else if (num2 > num1 && num2 > num3)
// {
//     console.log("num2 is greatest");
// }
//  else {
// console.log("num3 is greatest");
//  }
// console.log("bye.....");

// console.log('bye');


//ternary operator///////////////////////////////////////
// let num=5
// let result

// if(num%2===0)
//  result="even"
// else
//  result="odd"

//? ternary operator,......


// let num=5
// let result

// result =  num%2===0 ? "even" : "odd" 

//  console.log(result);

// leta=2
// letb=3

// result = num%2===0 ? "even" : "odd"


// console.log(result);

// const a=2;
// const b=3;


// result = num%2===0 ? "even" : "odd"

// console.log(a&b) 


let nams = [43,54,65,56,76,34,34,34];
nums.forEach(n,i,nums   =>
{
console.log(n)}); 





let nums =[42,52,54,65,54,90,42,12,43,54,65,43,65];
console.log(nums.filter('n => n%2===0'));
















































//logic first tamil language........
// for (let i = 1; i <= 3; i++) {
//     let name = "John Doe";
//     console.log("Hi, my name is " + name);
//   }

// for (let i = 0; i < 3; i++) {
//     let name = "John Doe";
//     console.log("Hi, my name is " + name);
// }

//map
//  let priceUSD =[20,30,10]
//  let priceINR =priceUSD.map(x =>  x *10)
//  console.log(priceINR) 

//array map method function

// const input =  [{name:'fname',age:23},
//                {name:'sname',age:23},
//                {name:'ename',age:23},
//                 {name:'wname',age:23}]
 
// const age = input.map(x => x.age)

// console.log(age)


//filter method using java script.......... 

// let cost=[335,54,34,323,22,556,54]
// let lessthan100 = cost.filter(x => x<100)
// console.log(lessthan100)     


//reduce
// cost = [10,10,10,10,10]
// let cartotal = cost.reduce((total,el) => total+el,100)
//  console.log(cartotal)


//  arr2d =[
//      ["a" , "b" , "c" ],
//      ["c", "d", "e"],
//      ["f","g","h"],

//     ];
// let result ={'a':1,'b':2}
// result['c']=1
// console.log(result['d'])


// console.log(arr2d.flat())
// let count = arr2d.flat().reduce(
//     (accumulator,currVal) => {
// if accumulator[]

//     }
// ,{});






































































