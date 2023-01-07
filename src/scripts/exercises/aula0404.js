// Aula 0404

// Exercício 1 - Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 10',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 10',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 3',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 10',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 3',
  },
];

let total =  0;
let taxaTotal = 0;
let recebTotal = 0;

transacoes.forEach( (item) => {
  // ao inves do parseInt da pra colocar o + na frente da String, aí ela vira um numéro positivo
  const numLimpo = parseInt(item.valor.replace('R$ ', '')); 

  if( item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numLimpo;
  } else if( item.descricao.slice(0, 4) === 'Rece') {
    recebTotal += numLimpo;
  }
});

console.log(taxaTotal);
console.log(recebTotal);


// Exercício 2 - Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const array = transportes.split(';');
console.log(array);

// Exercício 3 - Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
const newElem = html.split('span');
console.log(newElem);
const newElemA = newElem.join('a');
console.log(newElemA);

// Exercício 4 - Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));
console.log(frase.slice(-1));

// Exercício 5 - Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totalTax = 0;
transacoes2.forEach( (item) => {
  const tax = item.toLowerCase();
  if ( tax.includes('taxa') === true ) {
    totalTax += 1;
  }
});
