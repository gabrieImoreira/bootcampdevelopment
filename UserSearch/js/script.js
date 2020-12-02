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
  fetchCountries()
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
  allUsers = json.results.map( user => {
    const { gender: gender, dob, name, picture} = user; 

    return{
      gender,
      age: dob.age,
      name: name.first +' '+ name.last,
      picture: picture.thumbnail,
    }
  })
  render();
}

function render(){
}
function QueryUsers(){
  let usersHTML="<div>"

  allUsers.forEach(user =>{
    const { gender: gender, age, name, picture} = user; 

    const userHTML= `
      <div class="user">
        <div>
        <img src="${picture}" alt="${name}">
        </div>
        <div>
        ${name}, ${age} anos 
        </div>
      </div>
    
    `;

    usersHTML += userHTML;
  });

  tabUsers.innerHTML = usersHTML;
}