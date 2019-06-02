// const header = document.getElementsByClassName('header')[0];
const header = document.querySelector('.header');

console.log(header.innerHTML);

header.lastElementChild.innerHTML = 'Nowy tekst linka <br> tu moge wstawic znaczniki html';

console.log('======================== classList ===========');
console.log(header.classlist);
header.classList.add('decor-header');

setTimeout(
    () => {
        header.classList.remove('decor-header');
        header.getElementsByClassName.backgroundColor ='yellow';
    },
    2000
)