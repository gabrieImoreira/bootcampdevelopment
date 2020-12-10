import {promises as fs} from "fs";
let state = null;

init();

async function init(){
filterStates();
getBiggestStates('more');
getBiggestStates('less');
}

async function filterStates(){
  const jsonStates = JSON.parse(await fs.readFile("Estados.json"));
  const jsonCities = JSON.parse(await fs.readFile("Cidades.json"));
  
  for (state of jsonStates){
    const stateCities = jsonCities.filter((city => city.Estado === state.ID));
    fs.writeFile(`./states/${state.Sigla}.json`, JSON.stringify(stateCities));
  }
}

async function getCitiesCount(uf){
  const citiesByState = JSON.parse(await fs.readFile(`./states/${uf}.json`));
  //let total = citiesByState.length 
  //console.log(total);
  return citiesByState.length;
}

async function getBiggestStates(condition){
  const jsonStates = JSON.parse(await fs.readFile("Estados.json"));
  const list = [];

  for(state of jsonStates) {
    const count = await getCitiesCount(state.Sigla);
    list.push({UF: state.Sigla, count});
  }
  
  list.sort((a,b) => {
    if (a.count < b.count) {return 1};
    if (a.count > b.count) {return -1}
  });
  //console.log(list);
  
  if(condition === 'more'){
    let results = list.slice(0,5);
    console.log(results);
  } else if(condition == 'less') {
    let results = list.slice(-5);
    console.log(results);
  }
}
