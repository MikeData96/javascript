// deklaracja funkcji
function showTextStatic() {
    console.log('Text z funkcji showText');
}

//wywoładnie funkcji
showTextStatic();


//deklaracja funkcji z parametrami
function showTextDynamic(userText) {
    console.log(userText);
}

//wywołanie funkcji z parametrami
showTextDynamic('Akademia 108 na dzień dziecka!!!');

showTextDynamic('A jutro niedziela');

showTextDynamic('ABC');


//Funkcja która pobiera dane od usera, dodaje na końcu tekstu
//3 wykrzykniki i zwraca wynik do użycia w dalszej części programu 

const getUserData = function (textInput) {
    const resultText = textInput + '!!!';
    // zwracam wynik działania funkcji (resulText)
    return resultText;
}

let resultFunction = getUserData('Text użytkownika');

/*
taak się dzieje po wywołaniu funkcji getUserData
let resultFunction = return resultText;
*/
console.log(resultFunction);


// FUNKCJE STRZAŁKOWE - ES6
const multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}

let multiplyResult = multiply(2, 5);
console.log(multiplyResult);

const multiplyShort = (num1, num2) => num1 * num2;
/*
odpowiednik zapisu

const multiplyShort = (nu1, num2) => {
    return num1 /8 num2;
}
*/

let resultShort = multiplyShort (2, 3);
console.log(resultShort);



