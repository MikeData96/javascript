let samochod = {
    marka: 'Ferrari',
    moc: 415,
    kolor: 'czerwony',
    przedstawieSie() {
        return `Nazywam się ${this.marka} i mam moc ${this.moc}KM`;
    },
    odpal() {
        console.log('brum brum');
    }
}

const instancjaSamochodu1 = samochod.przedstawieSie();
console.log(instancjaSamochodu1);

samochod.marka = 'Fiat';
samochod.moc = 80;
const instancjaSamochodu2 = samochod.przedstawieSie();
console.log(instancjaSamochodu2);









class Ogloszenie {

    constructor(id, tytul, tresc, cena, lokalizacja) {
        this.id = id;
        this.tytul = tytul;
        this.tresc = tresc;
        this.cena = cena;
        this.lokalizacja = lokalizacja;
    }

    wyswietl() {
        document.write(
            `Ogłoszenie nr ${this.id}<br>
            Tytuł: ${this.tytul}<br>
            Treść: ${this.tresc}<br>
            Cena: ${this.cena}<br>
            Lokalizacja: ${this.lokalizacja}
            `
        )
    }
}

const ogloszenie1 = new Ogloszenie(
    0001223545,
    'Sprzedam kota',
    "Sprawny, młody nie bity kot na czterech łapach",
    120,
    'Warszawa'
)

ogloszenie1.wyswietl();