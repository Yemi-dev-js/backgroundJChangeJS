const colours = ["blue","yellow", "black", "white"];

const runColours = function(arr){
  let newColourList = arr.filter(function(el, index){
    return el !== "yellow";
  });
  return newColourList;
}

console.log(runColours(colours));

// const filter = colours.filter(function(el, index){
//   return el.length > 5;
// });

// console.log(filter);


// const colourCycle = function(arr){
//   arr.forEach(function(el, index){
//     const body = document.querySelector("body");
//     body.style.backgroundColor = el;
//   });
// }

// let display = colourCycle(colours);
// console.log(display);


// const changeBackground = function(){
//   const body = document.querySelector("body");
//   body.style.backgroundColor = "red";
// }

// const list = document.querySelectorAll("p");
// const displayNewList = function(arr){
//   if(arr.textContent.includes("one") === true){
//     arr.remove();
//   }
// }

// displayNewList(list);
// console.log(list);
// const changeParagraph = function(arr){
//   let newList = arr.filter(function(el, index){
//     return el !== "one";
//   });
//   return newList
// }
  
  
// changeParagraph(list);