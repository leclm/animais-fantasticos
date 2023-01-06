// Aula 03.03

// Exercício 1 - Retorne no console todas as imagens do site
const allImgs = document.getElementsByTagName("img");
console.log(allImgs);

// Exercício 2 - Retorne no console apenas as imagens que começaram com a palavra imagem
const allImgsStartM = document.querySelectorAll('[src^="assets/img/m');
console.log(allImgsStartM);

// Exercício 4 - Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricaoSelect = document.querySelector('.animais-descricao');
const stH2 = animaisDescricaoSelect.querySelector('h2');
console.log(stH2);

// Exercício 5 - Selecione o último p do site
const pSelected = document.querySelectorAll('p');
const lastP = pSelected[pSelected.length-1];
console.log(lastP);