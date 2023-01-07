// Aula 0402

// Exercício 1 - Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.name = nome;
  this.lastname = sobrenome;
  this.age = idade;
}

Pessoa.prototype.fullname = function () {
  return this.name + " " + this.lastname;
}

const p = new Pessoa('Letícia', 'Lima', 27);
p.gender = "female";

// Exercício 2 - Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Exercício 3 - Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click();  // undefined

// Exercício 4 - Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
