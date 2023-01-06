// Aula 03.07
const menuAnimal = document.querySelector('.menu a');
menuAnimal.addEventListener('click', callback);
function callback() {
  console.log('Clicou');
}

// Exercício 1 - Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
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

// Exercício 2 - Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function handleClick(e) {
  e.preventDefault();
  console.log(e.currentTarget) ;
}

allElements.forEach( (element) => {
  element.addEventListener('click', handleClick);
});

// Exercício 3 - Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
const allElements2 = document.querySelectorAll('body *');

function handleClick2(e) {
  e.preventDefault();
  console.log(e.currentTarget) ;
  e.currentTarget.remove();
}

allElements2.forEach( (element) => {
  element.addEventListener('click', handleClick2);
});

// Exercício 4 - Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleKeyboard(event) {
  if (event.key === 't') {
    //document.body.setAttribute('style', 'font-size: 180%;')
    document.documentElement.classList.toggle('textomaior');
  } else if (event.key === 'r') {
    //document.body.setAttribute('style', 'font-size: 150%;')
  }
}
window.addEventListener('keydown', handleKeyboard);