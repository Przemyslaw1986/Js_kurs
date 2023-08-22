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
// zloto

// ----------------------------
// const nmb = [5, 10, 15];
// if ((nmb[0] + nmb[20]) > nmb[1]) 
// {console.log("Suma pierwszego i ostatniego elementu jest większa niż drugi element")}
// else if 
// ((nmb[0] + nmb[2]) < nmb[1]) {console.log("Suma pierwszego i ostatniego elementu nie jest większa niż drugi element")}
// else {console.log("Suma pierwszego i trzeciego elementu tablicy jest równa drugiemu elementowi")}

// const firstAr = [1, 2, 3];
// const secondAr = [4, 5, 4];

// if (firstAr.length > secondAr.length) {console.log("Pierwsza tablica jest dłuższa")}
// else if (firstAr.length < secondAr.length) {console.log("Druga tablica jest dłuższa")}
// else {console.log("Tablice mają taką samą długość")}

// const fru = ["pear", "banana", "orange"];
// const fru_v2 = ["apple", "banana", "orange"];
// if (fru[0] === "apple") 
// {console.log("Pierwszy element tablicy to 'apple'")}
// else 
// {console.log("Pierwszy element tablicy, to nie 'apple'")};
// if (fru_v2[0] === "apple")
// {console.log("Pierwszy element tablicy fru_v2, to 'apple'")}
// else
// {console.log("Pierwszy element tablicy fru_v2, to nie 'apple'")}






// ---------------------------------------------------
const nmb = [5, 10, 15];

if (nmb[0] + nmb[2] > nmb[1]) {
    console.log( "Suma pierwszego i ostatniego elementu jest większa niż drugi element");
}
else if (nmb[0] + nmb[2] < nmb[1]) {
    console.log( "Suma pierwszego i ostatniego elementu nie jest większa niż drugi element")
}
else {console.log("sume pierwszego i ostatniej równa jest drugiemu elementowi")};

const firstArray1 = [1, 2, 3]; 
const secondArray1 = [4, 5,5];

if (firstArray1.length > secondArray1.length) {
    console.log("Pierwsza tablica jest dłuższa")
}
else if (firstArray1.length < secondArray1.length) {
    console.log("Druga tablica jest dłuższa")
}
else {
    console.log("Tablice mają taką samą długość");
  }

  const fruits2 = ["pear", "banana", "orange"];
  const fruits_v22 = ["apple", "banana", "orange"];

  if (fruits2[0] === "apple") {
    console.log( "Pierwszy element tablicy to 'apple'")
  }
  else {console.log("Pierwszy element tablicy, to nie 'apple'")}