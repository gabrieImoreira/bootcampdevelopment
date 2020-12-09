import {promises as fs} from "fs";

let allStates = [];

filterStates();
async function filterStates(){
  const jsonStates = JSON.parse(await fs.readFile("Estados.json"));
  
  const obj = 2;
  jsonStates.forEach(state =>{
    const {ID, Sigla, Nome} = state;
    fs.writeFile("./States/"+Sigla+".json", JSON.stringify(obj));
  });
}
//
async function StatesAndCities(){
  try{

  }catch{

  }
}