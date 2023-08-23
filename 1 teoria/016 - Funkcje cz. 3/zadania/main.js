// Zadanie 1: Obliczanie średniej

// Zadeklaruj funkcję o nazwie "calculateAverage", która przyjmuje tablicę liczb jako argument i zwraca średnią arytmetyczną tych liczb. Wykorzystaj pętlę for do obliczenia sumy liczb, a następnie podziel tę sumę przez długość tablicy.

// Przykład użycia: calculateAverage([1, 2, 3, 4, 5]); // zwraca 3

console.log("cokolwiek");
let sumAverage = 0;
let aver = 0;

// const calculateAverage = function([...items]) {for item of items let average += 1}


const calculateAverage = function([...items]) {
    for ( let i = 0; i<items.length; i++ ) {
        sumAverage += items[i]
    }
   
    return (sumAverage/items.length);
    // console.log(aver)

}


// calculateAverage([1,2,3,4,5])

// -----------------------------------------------------------
// Zadanie 2: Filtracja liczb parzystych

// Zadeklaruj funkcję o nazwie "filterEvenNumbers", która przyjmuje tablicę liczb jako argument i zwraca nową tablicę zawierającą tylko liczby parzyste. Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia, czy liczba jest parzysta.

// Przykład użycia: filterEvenNumbers([1, 2, 3, 4, 5, 6]); // zwraca [2, 4, 6]

let evenSum = 0;
let evensOnly = []; 

const filterEvenNumbers = function([...numbers]){
    for (let i = 0; i < numbers.length; i++){
       if ( numbers[i] % 2 === 0) {
        evensOnly.push(numbers[i])
       }
    }
    return evensOnly;
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evensOnly);


// _______________________________________________________

// Zadanie 3: Liczba wystąpień elementu w tablicy

// Stwórz funkcję "countOccurrences" za pomocą przypisania funkcji anonimowej do zmiennej, która przyjmuje dwa argumenty: tablicę "array" oraz wartość "element". Funkcja powinna zwracać liczbę wystąpień "element" w tablicy "array". Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia, czy element tablicy zgadza się z podaną wartością.

// Przykład użycia: countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"); // zwraca 2

let occurrencesCounter = 0;

const countOccurrences = function(array, element){
    for (let i = 0; i<array.length; i++){
        if (array[i] === element) {
            occurrencesCounter += 1;
        }
    }
    return occurrencesCounter;
}

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"));

