const div = document.getElementById('parFirst').children[1];

// tworzę nowy element html
const newElement = document.createElement('p');

// tworzę treść do umieszczenia w paragrafie
const newElementText = document.createTextNode('Nowy paragraf !!!!!!!!');

// wstaw tekst do elementu newElement
newElement.appendChild(newElementText);

// wstawiam paragraf z treścią do pustego diva
div.appendChild(newElement);

const newElement2 = document.createElement('h2');
newElement2.textContent = 'treść hadwójki !!!!!';
newElement2.setAttribute('class', 'przykladowa-klasa');
div.appendChild(newElement2);

// usuwam element newElement2 ze strony (z Dom)
// aby usunąć element należy pobrać jego rodzica i na nim wywołać metodę removeChild
setTimeout(
    () => {
        div.removeChild(newElement2);
    },
    2000
)


// insertBefore - wstawiamy paragraf między link 3 a link 4
const section = document.querySelector('#sectionFirst');
const newP = document.createElement('p');
newP.textContent = 'Paragraf przed ostatnim linkiem';
section.insertBefore(newP, section.lastElementChild);
// insertBefore należy wywołać na rodzicu elementu przed którym chcemy wstawić nowy element
// elementRodzic.insertBefore(nowyElement,danyElementPrzedKtórymWstawiamy)

//usuwam z sekcji atrybut id
section.removeAttribute('id');
