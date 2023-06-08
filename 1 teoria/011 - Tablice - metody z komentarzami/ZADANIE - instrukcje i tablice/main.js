console.log("works folks")

// Zadanie 1: Elementy tablicy

const numbers = [5, 10, 2];

if ((numbers[0] + numbers[2]) > numbers[1]) {
    console.log("Suma pierwszego i ostatniego elementu jest większa niż drugi element")
} else {
    console.log("Suma pierwszego i ostatniego elementu nie jest większa niż drugi element")
}

// -------------------
// Zadanie 2: Porównanie długości tablic

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 1, 2, 3, 1, 2];


firstArray.length > secondArray.length ? console.log("Pierwsza tablica jest dłuższa") : console.log("Druga tablica jest dłuższa");


// const firstArray = [1, 2, 3];
// const secondArray = [4, 5];
 
// if (firstArray.length > secondArray.length) {
//   console.log("Pierwsza tablica jest dłuższa");
// } else if (firstArray.length < secondArray.length) {
//   console.log("Druga tablica jest dłuższa");
// } else {
//   console.log("Tablice mają taką samą długość");
// }

// ------------------
// Zadanie 3: Sprawdzanie zawartości tablicy

const fruits = ["pear", "banana", "orange"];
const fruits_v2 = ["apple", "banana", "orange"];

if (fruits.indexOf("apple") == 0) {console.log("Pierwszy element tablicy to 'apple'")} 
else {console.log("Pierwszy element tablicy to nie 'apple'")};

if (fruits_v2.indexOf("apple") == 0) {console.log("Pierwszy element tablicy to 'apple'")} 
else {console.log("Pierwszy element tablicy to nie 'apple'")};



// const fruits_v1 = ["pear", "banana", "orange"];
// const fruits_v2 = ["apple", "banana", "orange"];
 
// if (fruits_v1[0] === "apple") {
//   console.log("Pierwszy element tablicy to 'apple'");
// } else {
//   console.log("Pierwszy element tablicy nie jest 'apple'");
// }
 
// if (fruits_v2[0] === "apple") {
//   console.log("Pierwszy element tablicy to 'apple'");
// } else {
//   console.log("Pierwszy element tablicy to nie 'apple'");
// }