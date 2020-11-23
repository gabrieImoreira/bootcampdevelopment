window.addEventListener('load',start);

function start() {
  var rangeNumber = document.querySelector('#range');
  rangeNumber.addEventListener('change', writeInput)

}

function writeInput(){
  rangeNumber = document.querySelector('#range').value;

  var number = document.querySelector('#number');
  number.value = rangeNumber;
  console.log(rangeNumber);
  var numberWritten = document.querySelector('#numberWritten');

  var numero = parseInt(rangeNumber);
  var auxiliar1 =   ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
  var auxiliar2 = ["Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
  var auxiliar3 = ["Cento", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos", "Setessentos", "Oitossentos", "Novessentos"];
  var retorno = "";
  
    if (numero < 20){
    retorno = auxiliar1[numero];
    } else {
    var temp = numero.toString().split('');
    var primeiro_numero = temp[0];
    var segundo_numero = temp[1];
    retorno = auxiliar2[primeiro_numero-1] 
    if (segundo_numero > 0){
    retorno += " e " + auxiliar1[primeiro_numero];
    }
    
    }
    
    
  
  numberWritten.value = retorno;

}


