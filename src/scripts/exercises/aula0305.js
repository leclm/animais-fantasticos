// Aula 03.05
// Exercício 1 -  Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => item.classList.add('ativo'));

// Exercício 2 - Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => item.classList.remove('ativo'));
itensMenu[0].classList.add('ativo');

// Exercício 3 - Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
const img = document.querySelector('img');
img.setAttribute('alt', 'Texto alternativo');
imgs.forEach( item => console.log(item.hasAttribute('alt')));

// Exercício 4 - Modifique o href do link externo no menu
const linkHTML = document.querySelector('a[href^="https"]');
console.log(linkHTML.setAttribute('href',  'http://www.google.com/'));