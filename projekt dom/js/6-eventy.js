// pobieram do zmiennej pierwszy link z atrybutem href == http://akademia108.pl
const link = document.querySelector('[href="http://akademia108.pl"]');
const parFirst = document.getElementById('parFirst');

const linkClickCallback = (e) => {
    e.preventDefault();
    e.stopPropagation();
        //alert('Kliknąłeś w link Akademii 108')
}

link.addEventListener('click', linkClickCallback);

parFirst.addEventListener('click', () => {
    alert('Kliknąłeś w parFirst pomimo że klikasz w link!');
});


// po najechaniu na h1 dodaj klasę body-decor
const h1 = document.querySelector('h1');
const myBody = document.body;

h1.addEventListener('mouseenter', () => {
    myBody.classList.add('body-decor');
});

h1.addEventListener('mouseleave', () => {
    myBody.classList.remove('body-decor');
});