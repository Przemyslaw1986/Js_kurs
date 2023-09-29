let size = 10;
let orderElement = 1;

const init = () => {
  // tutaj kod
  const button = document.createElement("button");
  const buttonReset = document.createElement("button");
  document.body.appendChild(button);
  document.body.appendChild(buttonReset);
  //   button.style.display = "block";
  //   buttonReset.style.display = "block";
  button.textContent = "Dodaj 10 elementów listy";
  buttonReset.textContent = "Wyczyść listę";
  button.style.fontSize = "29px";
  buttonReset.style.fontSize = "29px";
  button.style.margin = "5px";

  const ul = document.createElement("ul");
  document.body.appendChild(ul);
  button.addEventListener("click", createLiElements);
  buttonReset.addEventListener("click", resetLiElements);
};

const createLiElements = () => {
  // tutaj kod
  console.log("works");
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    // document.body.appendChild(li);
    document.querySelector("ul").appendChild(li);
    li.textContent = `Element nr: ${orderElement}`;
    li.style.fontSize = size + "px";
    li.style.listStyle = "none";
    orderElement++;
    size++;
  }

  console.log(size);
};

const resetLiElements = () => {
  document.querySelector("ul").textContent = "";
  size = 10;
  orderElement = 1;
};

init();
