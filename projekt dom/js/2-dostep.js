//pobieram element #parFirst za pomocą getElementById
const parFirst = document.getElementById('parFirst');
console.log(parFirst);

// pobieram element klasy .superlink za pomocą getElementsByClassName
const superlinki = document.getElementsByClassName('superlink');
console.log(superlinki);

// spread (...) operator tworzy tablicę z HTMLCollection
[...superlinki].forEach((element, index) => {
    console.log(element);
});

// pobieram elemnty (paragrafy) po nazwie tagu za pomocą  getElementsByTagName
const p = document.getElementsByTagName('p');
console.log(p);

//pobieram wszystkie linki o klasie .link za pomocą querSelectorAll
const linki = document.querySelectorAll('.link');
console.log(linki);

linki.forEach((element, index) => {
    console.log(element);
})

//pobieram pierwszy znaleziony link o klasie .link za pomocą querySelector
const pierwszyLink = document.querySelector('.link');
console.log(pierwszyLink);



/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * jeśli metoda zwraca HTMLCollection należy użyć spread operator aby użyć forEach
 * jeśli metoda zwraca NodeLis spraed operator nie jest potrzebny, forEAch działa bez niego
 *  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */