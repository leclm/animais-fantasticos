// Aula 0603
const cep = fetch('https://viacep.com.br/ws/80240220/json/');

// Usando o json e text com clone
cep.then(r => {
  const r2 = r.clone();
  r.text().then(responseText => {
    const div = document.querySelector('.content');
    div.innerHTML = responseText;
  });
  r2.json().then(responseJSON => {
    div = document.querySelector('.content2');
    div.innerHTML = responseJSON.localidade;
  });
});

// Exercício 1 - Utilizando a API https://viacep.com.br/ws/${CEP}/json/ crie um formulário onde o usuário pode digitar o cep e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnBuscar = document.getElementById('btn-buscar');
const pLogradouro = document.createElement('p');
const formContainer = document.getElementById('buscaCep');
formContainer.appendChild(pLogradouro);

btnBuscar.addEventListener('click', handleClick);
// vai mostrar o cep conforme foi atualizando o texto do input, nao precisa clicar no btn
// inputCep.addEventListener('keyup', handleClick); 

function handleClick(e) {
  e.preventDefault();
  buscaCep(inputCep.value);
};

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(cep => {
    pLogradouro.innerHTML = `${cep.logradouro} - ${cep.localidade}`;
  })
};

// Exercício 2 - Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin em reais. Atualize este valor a cada 30s
const brlValue = document.querySelector('.blrValue');
const usdValue = document.querySelector('.usdValue');

function fetchBTC() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(responseText => {
      const brl = responseText.BRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      const usd = responseText.USD.buy.toLocaleString('US', {style: 'currency', currency: 'USD'});

      brlValue.innerText = brl;
      usdValue.innerText = usd;
    }
  );
};
fetchBTC();

setInterval(() => {
  //fetchBTC();
}, 30000);

// Exercício 3 - Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chucknorris, toda vez que clicar em próxima
const jokeDisplay = document.querySelector('.joke');
const btnNext = document.querySelector('.btn-next');

btnNext.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault();
  fetchJokes();
};

function fetchJokes() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(joke => {
    jokeDisplay.innerText = joke.value;
  })
};

fetchJokes();