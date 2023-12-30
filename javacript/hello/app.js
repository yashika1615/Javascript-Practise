// console.dir(document.body);
// let heading=document.getElementById("heading");
// console.log(heading);

// let elements=document.querySelector("P");
// console.log(elements);


// let elements1=document.querySelector("p");
// console.log(elements1);

// let div=document.querySelector("div");
// console.dir(div);

let divs=document.querySelectorAll(".box");
//console.log(divs[0]);
//print divs using for loop
// for(divs of divs){
//     console.log(divs);
// }



// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";

// let idx=0;
// for(div of divs){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }

// let div=document.querySelector("div");
// console.log(div);
// let valid =div.getAttribute("id");
// console.log(valid);

// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// let div =document.querySelector("div");
// div.style.backgroundColor ="green";
// div.style.backgroundColor ="purple";
// div.style.fontSize= "100 px";

// let newBtn =document.createElement("button");
// newBtn.innerText ="Click ME";
// console.log(newBtn);

// let div =document.querySelector("p");
// div.after(newBtn);

// let newHeading  =document.createElement("h1");
// newHeading.innerHtml ="<i>Html,I am new!</i>";
// document.querySelector("body").prepend(newHeading);

// let para =document.querySelector("p");
//  para.remove();
//  newHeading.remove();

 let newBtn = document.createElement("button");
 newBtn.innerText ="click me";
 newBtn.style.color="white";
 newBtn.style.backgroundColor ="red";
 document.querySelector("body").prepend(newBtn);

let para =document.querySelector("p");

