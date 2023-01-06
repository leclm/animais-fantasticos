// Aula 03.08

// Exercício 1 - Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);

// Exercício 2 - Selecione o primeiro DT da DL de Faq
const faq = document.querySelector('.faq-lista');
const stDT = faq.children[0];
console.log(stDT);


// Exercício 3 - Selecione o DD referente ao primeiro DT
const faq2 = document.querySelector('.faq-lista');
const DD = faq2.children[0].nextElementSibling;
console.log(DD);

// Exercício 3 - Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const faq3 = document.querySelector('.faq');
faq3.innerHTML = animais.innerHTML;
