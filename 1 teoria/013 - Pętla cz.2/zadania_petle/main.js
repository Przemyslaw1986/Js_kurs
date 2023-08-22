// Zadanie 1: Suma liczb parzystych

// Napisz kod, który oblicza sumę wszystkich liczb parzystych od 1 do 100 (włącznie) korzystając z pętli for. Po obliczeniu sumy, wyświetl wynik w konsoli.

// let sum = 0;

// for ( let i = 1; i <=100; i++) {
//    if (i % 2 === 0) {
//     sum += i;
//    }
// }
// console.log(`Suma liczb parzystych od 0 do 100 wynosi: ${sum}`)


// let sum = 0;
 
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
 
// console.log("Suma liczb parzystych od 1 do 100 wynosi:", sum);





// Zadanie 2: Liczba gwiazdek

// Napisz kod, który generuje i wyświetla w konsoli trójkąt prostokątny o wysokości "h" składający się z gwiazdek (*). Użyj pętli for do iteracji po kolejnych poziomach trójkąta, a następnie pętli for do generowania odpowiedniej liczby gwiazdek w każdym poziomie (wydrukuj w konsoli). Przyjmij wartość h równą 6.

// Taki efekt chcemy uzyskać:

// *

// **

// ***

// ****

// *****

// ******

const h = 6;

for (let i = 0; i <= h; i++){
 let stars = ``;
 for (let j = 1; j <= i; j++){
    stars += `*`;
 }
 console.log(stars)
}


// Zadanie 3: Licznik podzielnych przez 3

// Napisz kod, który oblicza ilość liczb podzielnych przez 3 (nie zwracają reszty) w zakresie od 1 do 50 (włącznie) korzystając z pętli while. Po obliczeniu ilości liczb, wyświetl wynik w konsoli.


let i = 1
let divisible = 0

while (i <= 50) {
   if (i % 3 === 0) {
   divisible += 1 }
   i++;
}
console.log(divisible)


// let counter = 0; //będzie zwiększany w pętli
// let i = 1; //dla inicjalizacji pierwszej wartości, która wyniesie 1
 
// while (i <= 50) {
//   if (i % 3 === 0) {
//     counter++;
//   }
//   i++;
// }
 
// console.log("Ilość liczb podzielnych przez 3 w zakresie od 1 do 50 wynosi:", counter);



// ________________________

// Zadanie 1: Suma liczb parzystych

// Napisz kod, który oblicza sumę wszystkich liczb parzystych od 1 do 100 (włącznie) korzystając z pętli for. Po obliczeniu sumy, wyświetl wynik w konsoli.

let evenNumberSumCounter = 0 

for ( let i = 0; i <= 100; i++) {
if ( i % 2 === 0 ) {evenNumberSumCounter += i}
}

console.log(`suma liczb parzystych od 0 do 100 to: ${evenNumberSumCounter}`)

// Zadanie 2: Liczba gwiazdek

// Napisz kod, który generuje i wyświetla w konsoli trójkąt prostokątny o wysokości "h" składający się z gwiazdek (*). Użyj pętli for do iteracji po kolejnych poziomach trójkąta, a następnie pętli for do generowania odpowiedniej liczby gwiazdek w każdym poziomie (wydrukuj w konsoli). Przyjmij wartość h równą 6.


const ha = 6;
let printString = "";
for ( let i = 0; i < ha; i++) {
   console.log(printString += "*")
}

// const hight = 6;
// for ( let i = 0; i < hight; i++) {
//    let starPrinter = ``;
//    for ( let j = 0; j<=i; j++){
//       starPrinter += "*"
//    }
//    console.log(starPrinter)
// }

// Zadanie 3: Licznik podzielnych przez 3

// Napisz kod, który oblicza ilość liczb podzielnych przez 3 (nie zwracają reszty) w zakresie od 1 do 50 (włącznie) korzystając z pętli while. Po obliczeniu ilości liczb, wyświetl wynik w konsoli.

let divinesCounter = 0;
let ini = 1;

while (ini <= 50){
   if (ini % 3 === 0){
      divinesCounter += 1;
   }
      ini++;
}
console.log(divinesCounter);

console.log("dupa");
// let i = 1
// let divisible = 0

// while (i <= 50) {
//    if (i % 3 === 0) {
//    divisible += 1 }
//    i++;
// }
// console.log(divisible)