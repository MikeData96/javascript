const pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

console.log('============== pobieram rodzica elementu pierwszyDiv ================');
const rodzicPierwszegoDiva = pierwszyDiv.parentElement;
console.log(rodzicPierwszegoDiva);

console.log('============== pobieram wszystkie dziecie (nodes) elementu pierwszyDiv ==========');
const wszystkichDzieciPierwszegoDiva = pierwszyDiv.childNodes;
console.log(wszystkichDzieciPierwszegoDiva);

console.log('============== pobieram tylko te dzieci, które są ELEMENTAMI HTML elementu pierwszyDiv ==========');

const dzieciElementyPierwszegoDiva = pierwszyDiv.children;
console.log(dzieciElementyPierwszegoDiva);

for(let i = 0; i < dzieciElementyPierwszegoDiva.length; i++) {
    console.log(dzieciElementyPierwszegoDiva[0]);
} 

console.log('=============== pobieram następnego brata/siostrę elementu pierwszyDiv =============');
const rodzenstwoNastepne = pierwszyDiv.nextElementSibling;
console.log(rodzenstwoNastepne);

console.log('=============== pobieram poprzedniego brata/siostrę elementu pierwszyDiv ===========');
const rodzenstwoPoprzednie = pierwszyDiv.previousElementSibling;
console.log(rodzenstwoPoprzednie);

console.log('=============== pobieram poprzedniego brata/siostrę elementu pierwszyDiv ===========');
const pierwszeDzieckoPierwszegoDiva = pierwszyDiv.firstElementChild;
console.log(pierwszeDzieckoPierwszegoDiva);

console.log('=============== pobieram ostatnie dizecko elementu pierwszyDiv ================');
const ostatnieDzieckoPierwszegoDiva = pierwszyDiv.lastElementChild;
console.log(ostatnieDzieckoPierwszegoDiva);