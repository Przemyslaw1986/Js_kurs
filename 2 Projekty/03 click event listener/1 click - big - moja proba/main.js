// tutaj rozwiązanie
const btn = document.querySelector("button");
// const list = document.querySelector("ul");
const listElements = document.querySelectorAll("li");
let sizeFont = 10;
// let liElement = document.querySelector("li").style.fontSize;
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

// const makeBigger = function () {
//   sizeFont++;
//   for (let i = 0; i <= listElements.length; i++) {
//     listElements[i].style.display = "block";
//     listElements[i].style.fontSize = sizeFont + "px";
//   }
// };

// btn.addEventListener("click", makeBigger);

const makeBigger = () => {
  listElements.forEach((element) => {
    element.style.display = "block";
    element.style.fontSize = sizeFont + "px";
  });
  sizeFont++;
};
btn.addEventListener("click", makeBigger);
