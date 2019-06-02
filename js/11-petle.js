for (let i = 0; i < 8; i++) {
    document.write(`Obrót pętli <b>nr ${i + 1}</b>, wartość zmiennej <b>i = ${i}</b><br>`);
}

const imiona = ['Magda', 'Czesław', 'Lucyna', 'Wiesław'];
const imionaCount = imiona.length; //4

for (let i = 0; i < imionaCount; i++) {
    console.log(`Imię ${imiona[i]}`);
}

console.log('============================');

//forEach - nie można użyć do obiektów
imiona.forEach((value, index) => {
    console.log(`Wartość indeksu ${index} tablicy imiona to: ${value}`);
}
);

console.log('============================');

//for in - do obiektów
const samochod = {
    marka: 'Opel',
    moc: 78,
    stan: 'używany'
}
for (let i in samochod) {
    console.log(`Nazawa właściwości obiektu to: ${i}, a jej wartość to: ${samochod[1]}`)
}

console.log('==============================');

// while i do while

let item = 15;
while (item < 10) {
    console.log(`while === item = ${item}`);
    item++;
}

// do while Zawsze wykona się chociaż jeden raz
do {
    console.log(`Do while === item = ${item}`);
    item++;
} while (item < 10)


console.log('====== break i continue =======');

//break i continue - !! nie działa w forEach

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        //jeśli i jest parzystę zatrzymuję bieżącą iterację i przechodzę do następnej - continue
        continue;
    }

    //jeśli i >=10 całkowicie zatrzymuję działanie pętli - break
    if(i >= 10) {
        break;
    }
    
    console.log(`Obrót pętli - zmienna i = ${i}`);
}
