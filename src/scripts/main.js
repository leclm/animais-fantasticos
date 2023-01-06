// Aula 03.03
// Exercício 1
/*const allImgs = document.getElementsByTagName("img");
console.log(allImgs);

// Exercício 2
const allImgsStartM = document.querySelectorAll('[src^="assets/img/m');
console.log(allImgsStartM);

// Exercício 4
const animaisDescricaoSelect = document.querySelector('.animais-descricao');
const stH2 = animaisDescricaoSelect.querySelector('h2');
console.log(stH2);

// Exercício 5
const pSelected = document.querySelectorAll('p');
const lastP = pSelected[pSelected.length-1];
console.log(lastP);


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

// Mostre no console cada parágrado do site
const parag = document.querySelectorAll('p');
parag.forEach( item => console.log(item));

// Mostre o texto dos parágrafos no console
parag.forEach( item => console.log(item.innerHTML));

// Aula 03.05
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => item.classList.add('ativo'));


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => item.classList.remove('ativo'));
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
const img = document.querySelector('img');
img.setAttribute('alt', 'Texto alternativo');
imgs.forEach( item => console.log(item.hasAttribute('alt')));

// Modifique o href do link externo no menu
const linkHTML = document.querySelector('a[href^="https"]');
console.log(linkHTML.setAttribute('href',  'http://www.google.com/'));

// Aula 03.06
// Verifique a distância da primeira imagem em relação ao topo da página
const stImg = document.querySelector('img').offsetHeight; // height + padding + border
const stImg2 = document.querySelector('img').offsetTop; // Distância entre o topo do elemento e o topo da página
const stImg3 = document.querySelector('img').clientHeight; // height + padding

// Retorne a soma da largura de todas as imagens
function somaLarguraImagens() {
  const images = document.querySelectorAll('img');
  let largura = 0;
  images.forEach((item) => {
    largura += item.getBoundingClientRect().width;
  });
  //console.log(largura);
}
window.onload = function() {
  somaLarguraImagens();
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const linkMenu = document.querySelector('.menu a');
console.log(linkMenu.getBoundingClientRect().width);
console.log(linkMenu.getBoundingClientRect().height);

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 700px)').matches;
console.log(small);

if (small) {
  document.querySelector('.menu').classList.add('menu-mobile');
} else {
  document.querySelector('.menu').classList.remove('menu-mobile');
  console.log("É desk");
}

// Aula 03.07
const menuAnimal = document.querySelector('.menu a');
menuAnimal.addEventListener('click', callback);

function callback() {
  console.log('Clicou');
}


// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');
function handleLink(e) {
  e.preventDefault();
  links.forEach( (item) => {
    item.classList.remove('ativo');
  })
  e.currentTarget.classList.add('ativo');
  // this.classList.add('ativo'); tbm funciona usando this
}
links.forEach( (item) => {
  item.addEventListener('click', handleLink);
})


// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function handleClick(e) {
  e.preventDefault();
  console.log(e.currentTarget) ;
}

allElements.forEach( (element) => {
  element.addEventListener('click', handleClick);
});


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
const allElements2 = document.querySelectorAll('body *');

function handleClick2(e) {
  e.preventDefault();
  console.log(e.currentTarget) ;
  e.currentTarget.remove();
}

allElements2.forEach( (element) => {
  element.addEventListener('click', handleClick2);
});
*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleKeyboard(event) {
  if (event.key === 't') {
    //document.body.setAttribute('style', 'font-size: 180%;')
    document.documentElement.classList.toggle('textomaior');
  } else if (event.key === 'r') {
    //document.body.setAttribute('style', 'font-size: 150%;')
  }
}
window.addEventListener('keydown', handleKeyboard);
