// Aula 03.04

// arrow function
const imgs = document.querySelectorAll('img');

// 1 arg, nao precisa (); se for só uma linha pode tirar o {} e o ; do final
imgs.forEach( index => console.log(index));

imgs.forEach( (item, index) => {
    console.log(item, index);
});

imgs.forEach(function(item) {
    console.log(item);
});

// Exercício 1 - Mostre no console cada parágrado do site
const parag = document.querySelectorAll('p');
parag.forEach( item => console.log(item));

// Exercício 2 - Mostre o texto dos parágrafos no console
parag.forEach( item => console.log(item.innerHTML));
