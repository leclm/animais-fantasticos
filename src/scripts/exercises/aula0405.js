// Aula 0405

// Exercício 1 - Retorne um número aleatório entre 1050 e 2000
// Math.floor(Math.random() * (max - min + 1)) + min;
const num = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(num);

// Exercício 2 - Retorne o maior número da lista abaixo
const numeros = '4, 5, 28, 8, 9';
const array = numeros.split(', ');
const maxNumber = Math.max(...array); // spread 
console.log(maxNumber);


// Exercício 3 - Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limpaPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
};

let total = 0;
listaPrecos.forEach( (item) => {
    total += limpaPreco(item);
    
})
console.log(total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
