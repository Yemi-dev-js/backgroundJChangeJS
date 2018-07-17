const colours = ["blue","yellow", "black", "white"];

// const colourCycle = function(arr){
//   arr.forEach(function(el, index){
//     const body = document.querySelector("body");
//     body.style.backgroundColor = el;
//   });
// }

// let display = colourCycle(colours);
// console.log(display);


const changeBackground = function(){
  const body = document.querySelector("body");
  body.style.backgroundColor = "red";
}

const changeParagraph = function(){
  const paragraph = document.querySelectorAll("p");
  paragraph.filter(function(el, index){
   if(el === "one"){
     paragraph.remove();
   }
  });
}

changeParagraph();