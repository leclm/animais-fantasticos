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

