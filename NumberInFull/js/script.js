window.addEventListener('load',start);

function start() {
  var rangeNumber = document.querySelector('#range');
  rangeNumber.addEventListener('change', writeInput)
}

function writeInput(){
  rangeNumber = document.querySelector('#range').value;

  var number = document.querySelector('#number');
  number.value = rangeNumber;
  var numberWritten = document.querySelector('#numberWritten');

  var numero = parseInt(rangeNumber);
  var unidade =   ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
  var dezena = ["Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
  var centena = ["Cento", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos", "Setessentos", "Oitossentos", "Novessentos"];
  var retorno = "";
  
    if (numero < 20){
    retorno = unidade[numero];
    }else if(numero > 19 && numero < 100){ 
      var temp = numero.toString().split('');
      var n1 = temp[0]; 
      var n2 = temp[1];
      retorno = dezena[temp[0]-1];
      if(n2 > 0 && numero < 100){
        retorno = retorno + " e " + unidade[n2];
      }
    }else if(numero >= 100) {
      var temp = numero.toString().split('');
      var n1 = temp[0]; 
      var n2 = temp[1];
      var n3 = temp[2];
      retorno = centena[temp[0]-1];
      if(n2>0 && n3 === 0){
        retorno = retorno + " e " + dezena[n2-1];
      }else{
        retorno = retorno + " e " + dezena[n2-1] + " e " + unidade[n3];
      }
    }

    console.log(n1);
      console.log(n2);
      console.log(temp[2]);
      console.log(retorno);
  
  numberWritten.value = retorno;
 
}
