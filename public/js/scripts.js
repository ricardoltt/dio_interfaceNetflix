const cards = document.querySelectorAll('#cards');
const sinopse = document.querySelector('.descricao');
const logo = document.querySelector('#imagem-logo');
const titulo = document.querySelector('.titulo')
const boxFilme = document.querySelectorAll('.item')

for (let card of cards) {
  card.addEventListener("click", function() {
    console.log('card clicado')
    sinopse.innerHTML = 'Teste sinopse';
    titulo.innerHTML = 'Teste titulo'
    logo.src = 'Teste logo'
  })
}