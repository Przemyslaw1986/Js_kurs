// tutaj rozwiązanie
const btn = document.querySelector("button");
const list = document.querySelector("ul");
const listElements = document.querySelectorAll("li");
// let sizeFont = 10;
let liElement = document.querySelector("li").style.fontSize;
// liElement = 10;

// const makeBigger = function () {
//   //   listElements.style.display = "block";
//   listElements.forEach((element) => {
//     element.style.display = "block";
//     // element.style.fontSize = sizeFont;
//     liElement++;
//     // sizeFont += 1;
//     // sizeFont = sizeFont + "px";
//   });
//   console.log("click");
//   console.log(liElement);
// };

const makeBigger = function () {
  for (let i = 0; i <= listElements.length; i++) {
    liElement[i].style.display = "block";
    li.style.fontsize = size + "px";
  }
};

btn.addEventListener("click", makeBigger);
