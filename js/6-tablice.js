
let panstwa = ['Portugalia', 'Argentyna', 'Dominikana', 'Kongo', 'Norwegia'];
let simpleType
//dodaje na końcu 3 państwa
panstwa.push('Indie', 'Nepal', 'Panama');

//usuwam ostatni indeks tablicy
panstwa.pop();

//dodamy na początku 2 państwa
panstwa.unshift('Polska', 'Słowacja');

//usuwm z początku tabicy element
const deletedCountry = panstwa.shift();

console.log(panstwa);
console.log(`Własnie usunąłem z tablicy element ${deletedCountry}`);

console.log(`Moja tablica sklada się z ${panstwa.lenght} elementów`);

//reverse
console.log(panstwa.reverse());

//join
console.log(panstwa.join('----??----'));

//indexOf || includes E56
console.log(panstwa.index0f('Dominikana AAA'));
console.log(panstwa.includes('Dominikana'));

//isArray
console.log(Array.isArray(panstwa));

//toString
console.log(panstwa.toString());

//łączenie tablic

let panstwaAfryki = ['RPA', 'Egipt', 'Nigeria'];
let zbiorPanstw = panstwaAfryki.concat(panstwa);
console.log(zbiorPanstw);

//ączenie tablic E56 spread operator
let zbiorPanstwSpread = [...panstwaAfryki, ...pamstwa];
console.log(zbiorPanstwaSpread);

//usuwanie elementów ze środka tablicy 
panstwaAfryki.splice(1, 1, 'Sudan', 'Zanzibar');
console.log(panstwaAfryki);

