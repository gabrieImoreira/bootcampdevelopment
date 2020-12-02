/**
 * Estado da aplicação (state)
 */
let tabUsers = null;
let tabInformationUsers = null;
let allUsers =[];
let listUsers=[];
let input = document.querySelector('#input');
let button = document.querySelector('#button');
let user = null;
let qnt = 0;
let sumMale =0;
let sumWomen = 0;
let sumAges = 0;
let averageAges = 0;
window.addEventListener('load', start);

function start(){

  tabUsers = document.querySelector('#tabUsers');
  informationUsers = document.querySelector('#informationUsers');
  tabInformationUsers = document.querySelector('#tabInformationUsers');
  totalUsersList = document.querySelector('#totalUsersList');
  

  
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
  });
  render();
}

function render(){
}

function QueryUsers(){

function totalUsersList(){
  
  qnt = listUsers.length;
  totalUsersList = document.querySelector('#totalUsersList');
  totalUsersList.textContent = qnt + ' usuário(s) encontrado(s)';
}
  let usersHTML=
      '<div>' 

  listUsers = allUsers.filter(user =>{
    return user.name.toLowerCase().indexOf(input.value.toLowerCase()) > -1
  });
  
  listUsers.forEach(user =>{
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
  totalUsersList();
  StatisticUsers();
  
  function StatisticUsers(){

    const informationUsers = document.querySelector('#informationUsers');
    informationUsers.textContent = 'Estatísticas';
    sumMale = 0;
    sumWomen = 0;
    sumAges = 0;
    averageAges = 0;
    

    listUsers.forEach(user =>{
      
      const { gender: gender, age } = user; 
        if (gender === "male") {
            sumMale++;
        }
        if (gender === "female") {
            sumWomen++;
        }
        sumAges += age;
      });

      if (listUsers.length > 0) {
        averageAges = sumAges/listUsers.length;
    } else {
      averageAges = 0;
    }
  let informationUsersHTML=
      '<div>';

      const informationUserHTML= `
      <div class="user">
        <ul>
          <li>Sexo masculino: ${sumMale}</li>
          <li>Sexo feminino: ${sumWomen}</li>
          <li>Soma das idades: ${sumAges}</li>
          <li>Média das idades: ${averageAges}</li>
        </ul>
      </div>
    `;
    informationUsersHTML += informationUserHTML;
    tabInformationUsers.innerHTML = informationUsersHTML;
  }
}
