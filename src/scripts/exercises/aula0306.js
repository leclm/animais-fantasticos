// Aula 03.06

// Exercício 1 - Verifique a distância da primeira imagem em relação ao topo da página
const stImg = document.querySelector('img').offsetHeight; // height + padding + border
const stImg2 = document.querySelector('img').offsetTop; // Distância entre o topo do elemento e o topo da página
const stImg3 = document.querySelector('img').clientHeight; // height + padding

// Exercício 2 - Retorne a soma da largura de todas as imagens
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

// Exercício 3 - Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const linkMenu = document.querySelector('.menu a');
console.log(linkMenu.getBoundingClientRect().width);
console.log(linkMenu.getBoundingClientRect().height);

// Exercício 4 - Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 700px)').matches;
console.log(small);

if (small) {
  document.querySelector('.menu').classList.add('menu-mobile');
} else {
  document.querySelector('.menu').classList.remove('menu-mobile');
  console.log("É desk");
}