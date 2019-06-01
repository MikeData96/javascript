let cenaChlebaZabrze = 2.3;
let cenaChlebaPoznan = 2.45;

if (cenaChlebaZabrze >= cenaChlebaPoznan) {
    document.write(`Cheb z Zabrza jest droższy od chleba w Poznaniu`);
} else if (cenaChlebaZabrze < cenaChlebaPoznan) {
    document.write(`Chleb z Zabrza jest tańszy od chleba w Poznaniu`);
} else {
    document.write(`Chleb z Zabrza kosztuje tyle samo co w Poznaniu`);
}


// switch

const weekDay = new Date().getDay();
switch (weekDay) {
    case 1:
        console.log('Poniedzałek');
        break;

    case 2:
        console.log('Wtorek');
        break;

    case 3:
        console.log('Środa');
        break;

    case 4:
        console.log('Czwartek');
        break;

    case 5:
        console.log('Piątek');
        break;

    case 6:
        console.log('Sobota');
        break;

    case 7:
        console.log('Niedziela');
        break;

    // default jest opcjonalny i nie musi posiadać instrukcji break, choć może
    default:
        console.log('Nie mam pojęcia jaki dziś dzień tygodnia')
}

//tydzień w tablicy

const week = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nie'];

console.log(week[weekDay -1])