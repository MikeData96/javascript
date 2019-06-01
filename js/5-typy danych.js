
let wyplata = 4800;
let premia = 1400;
let calkowityDochod;

console.log(typeof wyplata);
console.log(typeof calkowityDochod); // undefined

calkowityDochod = wyplata = premia;
console.log(calkowityDochod);


//typ boolean
const slonce = true;
console.log('==================================');
console.log(typeof slonce);

if(slonce == true) {
    console.log('Dziś jest ładna pogoda');
} else {
    console.log('Dziś jest brzydka pogoda')
}

// typ null
const btn = document.querySelector('button');
console.log(typeof btn);

//template.string
const imie = 'Adam';
const text = 'Nazywam się $(imie)';
console.log(text);


