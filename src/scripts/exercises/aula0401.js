// Aula 0401

// Exercício 1 - Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

// Constructor
function Pessoa(name, age) {
  this.nome = name;
  this.idade = age;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}
 
const p = new Pessoa('Letícia', 20);
p.andar();


// Exercício 2 - Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos
const p1 = new Pessoa('João', 20);
const p2 = new Pessoa('Mariar', 25);
const p3 = new Pessoa('Bruno', 15);


// Exercício 3 - Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:  elements, retorna NodeList com os elementos selecionados; addClass(classe), adiciona a classe a todos os elementos; removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe) {
    this.elements.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

//listaItens.removelass('ativar');
//ul.removeClass('ativar-ul')

