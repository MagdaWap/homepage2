{
const welcome = () => {
  console.log("Cześć!") 
}

const hideTable = () => {
  const table = document.querySelector('.table');

  table.classList.toggle('hidden');
    button.innerText = table.classList.contains('hidden') ? 'Pokaż' : 'Ukryj';
};

const init = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', hideTable);
};
welcome();
init();
}
