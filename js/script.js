console.log("Cześć!") 

const button = document.querySelector('.button');
const table = document.querySelector('.table');

button.addEventListener('click', () => {
  table.classList.toggle('hidden');
  button.innerText = table.classList.contains('hidden') ? 'Pokaż' : 'Ukryj';
});
