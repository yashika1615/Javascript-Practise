// console.log("hello world");
// let age=25;
// let price=100;
// console.log(age);
// console.log(typeof(price));
// let x=BigInt("25");

// const student={
//     fullName : "rahul",
//     age: 20,
//     cgpa: 9.5,
//     isPass: true,
// };
// console.log(student.cgpa);
// console.log(typeof(student));

// //change value of student
// student["age"]=student["age"]+ 10;
// console.log(student.age);

// const product={
//     title:"Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };

// console.log(product);

// const profile={
//     username: "@Yashika",
//     isFollow: false,
//     followers: 0,
//     following: 75,
// };
// console.log(profile);

// for of loop
  // for(let val of strVar){
    //do some work
  // }
let size=0;
  let str="hello world";
  for(let i of str){
    // iterator -> characters
    console.log(i);
    size++;
  }
  console.log(size);

// for in loop
let student={
    name: "yashika",
    age: 20,
    cgpa: 8.5,
    isPass: true,
};

for(let key in student){

    console.log("key=", key );
}

// print all even number from 0 to 100
for(let num=0; num<=100; num++){
    if(num%2==0){
        console.log("num=", num);
    }
    }

// create a game where you start with any random game number. Ask the user to keep guessing the games number 
// until the user enters the corrrect value
// let gameNum=25;
// let userNum= prompt("Guess the game number: ");
// while(userNum!== gameNum){
//    userNum=prompt("You entered a wrong number");
//     //game
// }
// console.log("Congratulations, you entered the rihght number");

// let str1="yashika";
// console.log(str1.length);

//template literals

