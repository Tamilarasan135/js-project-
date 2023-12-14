// 03:07:24 tutor vide time line
//java script string method

let first_name="Tamil";

let last_name="Arasan";


//concatination
let c=first_name +" "+last_name;
console.log("concatination :   " +c )

//concat
  c=first_name.concat(' ',last_name);
console.log("concat : "+c);

//append

c="tutor";
c+="joes";
console.log("append : +c");

//escping
c="she can't run";
console.log(c);
//length
c=first_name.length;
console.log("length : "+c);

c=first_name.toUpperCase();
console.log("upperCase : "+c);

//loweCase
c=last_name.toLowerCase();
console.log("LowerCase : "+c);

;
//indx of
c=first_name.indexOf('l');
console.log("indexOf :"+c);
//last index of
c=last_name.lastIndexOf('s');
console.log("lastindexOf :"+c);

//charAt
c=first_name.charAt(3);
console.log("charAt 3 :"+c);

//charCodeAt
c=first_name.charCodeAt(3);
console.log("charCodeAt 3 :" +c);

// substr
c=first_name.substr(0,4);
console.log("substr :"+c);
c=first_name.substr(4);
console.log(c);


//substring
let text="01234567890";
c=text.substring(0,4);
console.log(c);
c=text.substring(4);
console.log(c);
c=text.substring(4,0);
console.log(c);
c=text.substring((23,53));
console.log("sgrst : " +c);

//slice
c=text.slice(2,4);
console.log("slice :" +c);
c=text.slice(4,2);
console.log("slice :" +c);
c=text.slice(25,30);
console.log("slice invalid Length :" +c);
c=text.slice(-5);
console.log("slice : "+c);

//split
let a="learn earn save invest";
c=a.split(" ");
console.log("split : "+c);
console.table(c);

//find and replace
a="I am from salem";
console.log("Before Replace : "+a);
c=a.replace('salem' , 'chennai');
console.log("After Replace : "+c);

//includes in js
//includes  means in th array wheather
// the eement is there or not

const animal=["dog","cat","puppy","jacky"];
console.log(animal.includes("jacky"));
console.log(animal.includes("lion"));

//trim ins js

a=" tamil ";
console.log("Bfore Trim :" +a.length);

//after trim
a=a.trim();
console.log("After Trim : "+a.length);

//pad start
a="3";
a=a.padStart(4,0);
console.log(a);
//pad end
a="2";
a=a.padEnd(4,0);
console.log(a);

a="4";
a=a.padEnd(4,'$');
console.log(a);


//string from char code () as key values
console.log(String.fromCharCode(65,66,67,68,
    97,98,99,122));


//template string
///a new concept
//2017 comed in es6
let full_name="tamil arasan";
let age="35";
let city="coimbatore";
let role="ceo";
let output="";
output+=`<table border='2'>
    <tr><th>Name</th><td>${full_name}</td></tr>
    <tr><th>age</th><td>${age}</td></tr>
    <tr><th>city</th><td>${city}</td></tr>
    <tr><th>Role</th><td>${role}</td></tr>
</table>`;
document.body.innerHTML=output;

//array
let a1=[1,2,3,4];
console.log(a1);
console.table(a1);

let b=new Array(10,20,30,40);
console.log(b)
let c1=new Array("tamil",30,true,
{m1:100,m2:75,m3:65});
console.log(c1);

//for Each  method
//accesing a seperate element in a array
const number=[1,2,3,4,5,6,7,8,9,10];
//value,index,array
number.forEach((value)=>{
    console.log(value);
})

//second method is index implementing
number.forEach((value,index)=>{
console.log("index :"+index+   "value :"+value);
});


const users1=[
{full_name:"tamil arasan", age:35,
city:"coimbatore",role:"ceo"},
{full_name:"tamil asan", age:35,
city:"coimbatore",role:"ceo"},
{full_name:"tamirasan", age:35,
city:"coimbatore",role:"ceo"},
{full_name:"tmrasan", age:35,
city:"coimbatore",role:"ceo"},
];

users1.forEach((value)=>
{
    console.log(value.full_name);
})

//mapp function
//map using simple array method

let num=[1,2,3,4,5,6,7,8,9,10];

let sqrt=num.map((value)=>{
    return Math.sqrt(value).toFixed(2);
})
console.table(sqrt);
//complex function in map function
const users=[
{name:"tamil",age:12,city:"coimbatore",
salary:10000},
{name:"tamil",age:14,city:"coimbatore",
salary:10000},
{name:"tamil",age:22,city:"coimbatore",
salary:10000},
{name:"tamil",age:312,city:"coimbatore",
salary:10000},
{name:"tamil",age:132,city:"coimbatore",
salary:10000},
];

console.table(users);

//functioning below

let eligible_status=users.map((user)=>({
    // name:user.name,
    // age:user.age,
    // city:user.city,
    // salary:user.salary,

//below is speard operator
    ...user,

    status:user.age>18?"Eligible":
    "NOT Eligible"
}));
console.table(eligible_status);



//slice method in js

const numbers=[1,2,3,4,5,6,7,8,9,10];

//slice method (start,end)

console.log(numbers);
console.log("slice     :" +numbers.slice());
console.log("slice(2)  :" +numbers.slice(2));
console.log("slice(2,4)  :"+numbers.slice(2,5));

//splice method//
//removed elements=splice(start,length,new-elements)

const a2=[1,2,3,4,5,6,7,8,9,10];
console.log(a2);
console.log("before splce :"+a2);
let removed_elements=a2.splice(2);
console.log(removed_elements);
console.log("after_splice :"+a2);

//2n method
const a3=[1,2,3,4,5,6,7,8,9,10];
console.log("before_splice :"+a3);
removed_elements=a3.splice(2,2);



//new elements
const a4=[1,2,3,4,5,6,7,8,9,10];
console.log(a4);
console.log("before splice :"+a4);
 removed_elements=a4.splice(2,2,25,26);
console.log("removed items :" + removed_elements);
console.log("after_splice :"+a4);

 

//concat topic
//concat method in java script array

const b1=[10,20,30];
const d=[40,50,60];
const e=[70,80,90];

let f=b1.concat(d);
console.log(f);


 f=b1.concat(d,e);
console.log(f);

f=b1.concat(d,e,35,45,55);
console.log(f);


//sort function in java script

const name=["kumar","auren","joes","tamil"];
console.log("before sort : "+name);
name.sort();
console.log("After sort :"+name);


const num1=[10,100,25,150,45,9];
console.log("Before sort :"+num1);
num1.sort();
console.log("After sort :"+num1);

num1.sort((a,b)=>{
    return a-b;
});
console.log("compare sort :"+num1);


num1.sort((a,b)=>{
    return b-a;
});
console.log("compare sort :"+num1);
 

//fill functon in js

let d1=[1,2,3,4,5];
console.log("before fill : "+d1);
// d1.fill(3);
// d1.fill(20,3);
// d1.fill(20,3,5);
d1.fill(20,1,3);

console.log("before fill : "+d1);




//includes in java script
//includes means in the array wheather the element is 
///there or not

const products=["pen","pencil","eraser","box"];
let result=products.includes("pen");
console.log(result);
 result=products.includes("eraser");
console.log(result);
 result=products.includes("box",2);
console.log(result);
 result=products.includes("bike");
console.log(result);

  
//join in java script 
//join fun is nothing but in the array element 
//remove the array fuction and return
const product1=["pen","pencil","eraser","box"];
console.log(product1);

console.log(products.join()); //seperator function
console.log(products.join('+')); 



//reserve in java script 
const n=[1,2,3,4,5,6];
console.log("before reverse :"+n);
n.reverse();
console.log("After reverse :"+n);
 
//array element in length property
const g={ 0: 10, 1: 20, 2: 30, 4: 40, 5: 50 , length : 4};
console.log(g);

Array.prototype.reverse.call(g);
console.log(g);


//push
let n2=[1,2,3,4,5];
console.log(n2);
console.log(n.push(60));
console.log(n2);   
console.log()
n.push(70,80,90,100);
console.log(n)
//pushing merging 2 array
 let user11=["ram","suresh","baba","ravi"];
 let users21=["rajesh","kumar"];

 user11.push(...users21);
 console.log(user11);


///pop in js
const users2=["ravi","sam","tamil","naveen"];
console.log(users2);
console.log(users2.pop());
console.log(users2);
console.log(users2.pop());
console.log(users2);


//shift function in java script
let students=["kumar","aureen","joes",
"zara","stanley","rajesh"];
 

console.log("before shift  :"+students)
let element = students.shift();
console.log("afters shift :"+ students);
console.log("removeed eements  :"+element);


console.log("before shift  :"+students)
 element = students.shift();
 console.log("removeed eements  :"+element);
console.log("afters shift :"+ students);


//UNSHIFT IN JAVA SCRIPT 
 const students1=["kumar","aureen","joes",
"zara","stanley","rajesh"];
 console.log("Before Shift :"+students1);


 let len= students1.unshift("tiya");
console.log("length :"+len);
console.log("After shift :"+students1);
console.log(students1);


 //index of () in js


  const students123=["kumar","aureen","joes",
"zara","stanley","rajesh"];
 let i=students123.indexOf("kumar");
 console.log("index :"+i);

let user="tutor joes";
let index=user.indexOf("o");
console.log("index :"+index);

 index=user.indexOf("o",5);
console.log("index :"+index); 


//last index of 
const students1234=["kumar","aureen","joes",
"zara","stanley","joes","rajesh"];

let i1=students1234.indexOf("kumar");
console.log(i1);
i1=students1234.lastIndexOf("joes");
console.log(i1);

let address1=" tutor joes charry road coiombatore joes";
i12=address1.indexOf("joes");
console.log(i);
i=address1.lastIndexOf("joes");
console.log(i);

  
//every and some in java script 
//every
n1=[10,20,12,14,60,23];
let result1=n1.every((value)=>{
    return value%2==0;

});

console.log("all elements are even : ",result1);
//some
n2=[12,11,10,9];
result=n2.some((value)=>{
    return value%2==0;
})
console.log("")

console.log("all elements are even : ",result);
 


function checkEven(value){
    return value % 2 == 0;
}
result=n.every(checkEven);
console.log("check even all elements are even :",result);



//primitive and reference data types!!!!!
//primitive


let a12=10;
let b122=a12;

console.log("A :"+a12);
console.log("B :"+b122);

a12=25;
console.log("A :"+a12);
console.log("B :"+b122);

 //refernce
 //object
let tuser={name:"joes",age:30};
let tuser2=tuser;
console.log("tuser 1:" ,tuser);
console.log("tuser 2:" ,tuser2);
tuser.age=25;
console.log("tuser 1:" ,tuser);
console.log("tuser 2:" ,tuser2);
  //array
  let arr1=[10,20,30];
  let arr2=arr1;
  console.log("array 1 :",arr1);
  console.log("array 2 :",arr2);
arr1.push(33);
console.log("array 1 :",arr1);
console.log("array 2 :",arr2);


//object clone use spread and onject 
//assign() in java script
//cloning the array in spread operator
const obj1={ a:1 ,b:2};
const obj2={c:3,d:4};

const obj3={...obj1,...obj2};
console.log(obj3);


//multiple ways to clone an array in java script

let originalArray=[1,2,3,4];


//1.spread operator
// let clonedArray=[...originalArray];

//slice()
// let clonedArray=originalArray.slice();

//concat
// let clonedArray=[].concat(originalArray);
 

//Array.from()
// let =Array.from(oA);

//JSON.parse(),     JSON.stringify()
let clonedArray=JSON.parse(JSON.stringify(originalArray));

console.log(clonedArray);



//destructuring in js

// const numbers112=[10,20,30,40,50];

// const11 [a,b,c,d]=numbers112;

// console.log(a);
// console.log(b);
// console.log(c);
 
// let nestedArray=[[1,2],[3,4],[5,6],[7,8]];
// con[[a,b],[c,d],[e,f]]=nestedArray;
// console.log(a);

 //object restructuring

//  let person={name:"tiya" ,age:4 , gender:"femlae"};
//  let {king,}



//function call
//fun with return statement

function add(a,b){
    return a+b;
}  
console.log(add(12,12));
console.log(add(12,33));


//function wirh arbitary 
//inbiult variable local arguments

function sum()
{
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;

}
console.log(sum(12,12));
console.log(sum(12,12,12,12));

//speard operaotor
//we are calling a function 


function total(...args){
    let total=0;
    for(let i=0;i<args.length;i++){
        total+=args[i];
    }
    return total
}

console.log(sum(12,12));
console.log(sum(12,12,12,12));


//function as expression 
const addw=function(a,b){
    return a+b;
}

console.log(add);
console.log(add(10,20));


//arrow function
 const add1=(a,b)=>{
    return a+b;
 };
 console.log(add);
 console.log(add(10,20));

 //1.using function with map

 let numbers1=[1,2,3,4,56,6];
 console.log(numbers1);


 //map function
 let doubleNumbers=numbers.map(number=>number*2);
 console.log(doubleNumbers);

//filter function
let words=["apple","bananna","orange","grape"];
console.log(words);
let filterWords=words.filter(word=>word.length>5);
console.log(filterWords)

//reduce function
let story=[1,2,3,4,5];
console.log(story); 
story=numbers.reduce((sum,number)=>sum+story,0);
console.log(story);

//4th arrow function to create a clousure  

const fruits=['apple','banana','cherry'];
console.log(fruits);
fruits.forEach(fruit=>console.log(fruit));

const fruits1=['apple','banana','cherry'];
console.log(fruits);

fruits.forEach(fruit=>console.log(fruit));


















