// 1. Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentNode.style.backgroundColor = "rgb(252, 236, 204)";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
// Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector("#primeiroFilhoDoFilho").innerText = "Adicionei um texto aqui como requisito do segundo tópico";

// 4. Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const proximoIrmao = elementoOndeVoceEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho1 = pai.lastElementChild.previousElementSibling;

// ###############  Parte II  ####################

// 1. Crie um irmão para elementoOndeVoceEsta.
let pegarIdPai = document.querySelector('#pai');
let criarElementoIrmao = document.createElement('div');
criarElementoIrmao.id = 'irmaoElementoOndeVoceEsta';
pegarIdPai.appendChild(criarElementoIrmao);

// 2. Crie um filho para elementoOndeVoceEsta.
let pegarIdPai1 = document.querySelector('#elementoOndeVoceEsta');
let criarElementoIrmao1 = document.createElement('div');
criarElementoIrmao1.id = 'filhoElementoOndeVoceEsta';
pegarIdPai1.appendChild(criarElementoIrmao1);

// 3. Crie um filho para primeiroFilhoDoFilho.
let pegarIdPai2 = document.querySelector('#primeiroFilhoDoFilho');
let criarElementoIrmao2 = document.createElement('div');
criarElementoIrmao2.innerText = 'Uhuuuuuuu, sou filho do primeiro filho do filho';
criarElementoIrmao2.id = 'filhoDoPrimeiroFilhoDoFilho';
pegarIdPai2.appendChild(criarElementoIrmao2);

// 4. A partir desse filho criado, acesse terceiroFilho.
const irmao = filhoDoPrimeiroFilhoDoFilho.parentNode.parentNode.nextElementSibling;


// ###############  Parte III  ####################