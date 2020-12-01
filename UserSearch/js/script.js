/**
 * Estado da aplicação (state)
 */
let tabUsers = null;
let informationUsers = null;
let allUsers =[];
let input = document.querySelector('#input');
let button = document.querySelector('#button');

window.addEventListener('load', start);

function start(){

  tabUsers = document.querySelector('#tabUsers');
  informationUsers = document.querySelector('#informationUsers');
  
  preventInputSubmit();
  activateInput();
}
function preventInputSubmit(){ //n recarregar a pagina

  function handleSubmit(event) {
    event.preventDefault();
  }
  input.addEventListener('submit', handleSubmit);
}

function activateInput(){ //comecar c o input ativado
  function handleTyping(event){ //search by enter
    if(event.key === 'Enter'){
     QueryUsers();
    }
  }
  function buttonSearch(event){
    QueryUsers();
  }
  input.focus();
  input.addEventListener('keyup', handleTyping);
  button.addEventListener('click', buttonSearch); //search by click button BUSCAR
}

async function fetchCountries(){
  const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
  const json = await res.json();

  allUsers = json.map(country => {
    const {numericCode, translations, population, flag} = country;

    return {
      id: numericCode,
      name: translations.pt,
      population,
      formattedPopulation: formatNumber(population),
      flag,
    };
  });
  render();
}
}

function QueryUsers(){
  console.log(input.value);
}