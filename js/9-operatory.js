
let liczba1 = 4;
let liczba2 = 3;

let wynik = liczba1 % liczba2;
//let wynik = liczba1 - liczba2;
//let wynik = liczba1 * liczba2;
//let wynik = liczba1 / liczba2;
//let wynik = liczba1 % liczba2;

console.log(wynik);

liczba1 += 12;
// liczba1 = liczba1 = 12;
console.log(liczba1);

// liczba1 -= 12;
// liczba1 = liczba1 - 12;

// liczba1 *=12;
// liczba1 = liczba1 * 12;

// liczba1 /= 12;
// liczba1 = liczba1 / 12;


// porównanie
if(liczba1 == liczba2) {
    console.log('liczba 1 == liczba2');
} else {
    console.log('liczba 1 != liczba2');
}

if(liczba1 >= liczba2) {
    console.log('liczba1 >= liczba2');
} else {
    console.log('liczba1 < liczba2');
}

//operatory logiczne
let fileExist = true;
let fileSize = 85;

//negacja !
console.log(fileExist, !fileExist);

if(fileExist == true && fileSize <= 50) {
    console.log('Możesz załadować plik');
} else {
    console.log('Plik nie istnieje lub jest za duży');
}