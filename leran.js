// strings = squance of characters 
// let name = `my 
// is 
// dinesh
// suthar`
// console.log(name);

// let firstname = new String("love babbar");
// console.log(firstname);

// let op1 = 'english';
// let op2 = 'maths';
// let ans = op1 +op2 ;
// console.log(ans);

// let op1 = 'english';
// let op2 = 'maths';
// let finalans = `${op1} + ${op2}`;
// console.log(finalans);

// let op1 = 'english';
// let op2 = 'HINDI';
// let finalans = `${op1}${op2}`;
// console.log(finalans.toLowerCase());

// let op1 = 'english';
// let op2 = 'HINDI';
// let finalans = `${op1}${op2}`;
// console.log(finalans.substring(2,4));

// let sntence = 'my name is dinesh i am for ahemdabad';
// let words = sntence.split(' ');
// console.log(words);

// let sntence =" my \"name\" is dinesh i am for ahemdabad";
// let words = sntence.split(' ');
// console.log(words);

// let sentence = "hello friends i hope you are very good";
// let index = 5;
// console.log(` index of ${index} return of character `);
// console.log(sentence.charAt(5));

// let one = "dineshe"
// let two = "suthar"
// console.log(one.concat(' ',two));





// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// Expected output: true

// console.log(str1.endsWith('best', 17));
// Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question'));

// let name = "dineh"
// console.log(name)

// function 

// non prameters

// function printcount (){
//     for(i=0; i <= 100; i++) {
//         console.log(i);
//     }

// }
// printcount();


// parameters function

// function printcount( num) {
//     for (i =0 ; i <= num; i ++) {
//         console.log(i);
//     }

// }
// printcount(128);


// function printAvg(num1, num2 ){
//     let ans = (num1 +num2 )/2   
//     console.log("average : = ", ans);
// }

// printAvg(45,78)

// return function
// function getsum (a,b,c) {
//     let sum = a + b + c; 
//     return sum;
// }

// let ans =  getsum(3,4,5);
// console.log(ans);

// function getmyname( firstname, lastname ) {
//     let fullname = firstname + " " + lastname;
//     return fullname;
// }

// let fullname = getmyname("dinesh" , "suthar");
// console.log(fullname);

// const getMultiplication = function (a,b) {
//     return a*b;
// }

// let ans = getMultiplication(2,20);
// console.log(ans);

// let squareNumber = function(num) {
//     let ans = num**2;
//     return ans;
// }


// let ans = squareNumber(5);
// console.log(ans);

// let getExp = (x,y) => {
//     let ans = x**y;
//     return ans;
// }

// console.log(getExp(2,10));

// learn array 
// let obj = {
//     name : "dinesh",
//     age : 19,
//     city : "ahmedabad",
//     greet : () => {
//         console.log("hello  sir my name is dinesh how are you`")

//     }
// };

// for(let key in obj){
//     console.log(key + " : " + obj[key]);
// }


// console.log(obj);
// obj.greet();

// creation of array
// let arr = [1,2,3,4,5    ];
// array consture
// let din = new Array('welcome', 34,true);
// din.push('dinesh');
// din.pop();

// din.shift();
// din.unshift("helloWorld");

// din.slice(2,5);
// din.splice(2,2,"helloWorld");
// first = postion
// second = num of item to replace the new itme
// third = name of new item

// console.log(din);


// let num = new Array (36,34689,348,489,33.44,484,15,48,5,5,48,45,48,4)

// let arreven = num.filter((number) => {
    // return number %2 === 0;
//         if(number %2 === 0) {
//             return true;
//         }else{
//             return false;
//         }
//     }
// );
// console.log(arreven);

// map mathod one by one procrss of all elments of array

// let arr = [ 1, 2, 3, 4 , 5, 6, 7, 8, 9];
// console.log(arr.map((number ,index    ) => {
//     return number * number;
// }))


// reduce mathodes
//mane two thing 
// 1 acccumalter jo apke array ke ki first value lega vana app value ste kar sakete ho;
// 2 currunt acc ke bad vali value he 
// let arr = [ 48,58,2,45,855,488,5,57,4,85]
// console .log(arr.reduce((acc,curr) => {
//     return acc + curr;
// }))

// let arr = [47,45,15,2,5,1,4];
// console.log(arr.sort())

// let arr = [47,45,15,2,5,1,4];
// console.log(arr.reverse())

// with heip forEach you are traves ever element of array
// let arr = [47,45,15,2,5,1,4]

// for(let index = 0; index < arr; index++){
//     console.log(arr[i]);
// }

// arr.forEach((value,index) => {
//     console.log("number :",value,"index :",index)
// })

// let arr = [10,20,30,40,50];

// let getSum = (arr) => {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum + value;
//     })
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);

// call stack & hoisting

// /* variable hosting */
// {
//     console.log(age);
//     var age = 25;
// }

// let not hositing are not posible
//     console.log(age);
//     let age = 25;

// funstion hositing are possible in function declaration me not in function experation
// sayhello();

// function sayhello() {
//     console.log("hello world");
// }

// let sayhello = function () {
//     console.log("hello world");
// }
// Uncaught ReferenceError ReferenceError

// class hositing are not possible
// const object1 = new human();
// class human {

// }

// function stack
// function greetme (greet , fullname) {
//     console.log("hello",fullname);
//     greet();
// }
// function greet() {
//     console.log("greeting for the day");

// }
// greetme(greet,"dinesh");
// greet();

// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first = arr[1];
// let ans = first(5,10);
// console.log(ans);


// var greet;
// console.log(greet)


// var greet = function() {
//     console.log("Namaste Dunia");
// }



// let obj = {
//     age:25,
//     wt: 36,
//     ht:180,
//     greet: ()=>{
//         console.log("hello Dunia");
//     }
// }

// console.log(obj.age);
// obj.greet();

// //global scope
// const age = 15;

// console.log(age);

// {
//     console.log(age)
// }
// if(true ){
//     console.log(age)
// }
// for(let i=0; i<2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("hi ", age);
// }
// sayHello();

// function scope
// function sayhello () {
//     const fullname = "earth";
//     console.log('hello world', name);
// }

// console.log(fullname);
// sayhello();

// block scope
// {
    //     const age = 100;
    // }
    
    // console.log(age);
    
    
    // console.log(height);
    // {
    //     var height = 180;
    // }
    
    // console.log(height);

// temporal dead zone
    // console.log(marks);
    // console.log("babbar");
    // console.log("Love");
    // const marks = 100;
    // console.log(marks);

// CLASS LEARN
// class Human {
//     age = 13;//publice
//     #wt = 80; //private
//     ht = 180;

//     constructor ( newage,newhight,newweight){
//         this.age = newage;
//         this.ht = newhight;
//         this.#wt = newweight;

//     };

//     walking(){
//         console.log("i am walking",this.#wt);
//     }

//     ruunning(){
//         console.log('i am running');
//     }
//     get fetchweight(){
//         return this.#wt;
//     }

//     set modifyweight(val){
//         this.#wt = val;
//     }
// }
// let obj =  new Human( 19,5.8,56);
// console.log(obj.fetchweight);
// obj.walking();

// defualt prameters
// function sayName(fName = "jay", lNmae = "hind"){
//     console.log("hello",fName, lNmae);
// }
// function sayName(fName = "jay", lNmae = fName.toUpperCase()){
//     console.log("hello",fName, lNmae);
// }

// sayName();

// function sayname(value = "dinesh"){
//     console.log("function output : ->",value);
// }
// sayname(undefined);

// let src ={
//     age : 12,
//     wt : 35,
//     ht:45

// }
// let dest = Object.assign({},src);

// let dest = {...src};
// console.log("src :",src);
// console.log("dest :",dest);



// error handling
//handling
// try{
//     console.log("try block statrts here");
//     console.log(x);
//     console.log("try block ends here");

// }catch(e){
//     // retry logic
//     console.log("i am inside catch block")
//     console.log("your error is here :",e);

// }
// finally{
//     console.log("this block will run no matter what");
// }


// try{
//     console.log(X);
// }catch(e){
//     throw new Error(" bhai pehle declare kro fer print kro");

// }


//JS DOM MANIUPILATION
// let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');
// newElement.textContent = "This is new element";
// beforebegine and afterbegine and beforeend and afterend

// mydiv.insertAdjacentElement('afterend',newElement);


// let parent = document.querySelector('#mydiv');
// let child = document.querySelector('#fpara');

// parent.removeChild(child);


