
 let salvar       = document.getElementById('salvar');
 let areatext     =  document.getElementById('areatext'); 
 let classificar;

 
 function imc(){
 let nome    = document.getElementById('nome').value; 
 let altura  = document.getElementById('alt').value ;
 let peso    = document.getElementById('pes').value ;
 let valorImc;
   

    
  if(nome === '' && altura === '' && peso === ''){

    areatext.textContent = 'PREENCHA TODOS CAMPOS';

    }
    else{
        valorImc = (peso / (altura * altura)).toFixed(2); 

        if(valorImc <= 18.5 ){
         classificar = 'ABAIXO DO PESO';
        
      }else if(valorImc <= 24.9){
         classificar = ' COM PESO NORMAL';
      }else if(valorImc <= 29.9){
         classificar = ' COM SOBREPESO';
      }else if(valorImc <= 34.9){
         classificar= 'COM OBESIDADE GRAU I';
      }else if(valorImc <= 39.9){
         classificar = 'COM OBESIDADE GRAU II';
      }else if(valorImc > 40){
         classificar = '!!!OBESIDADE MÓRBIDA!!!';
      }
     
         areatext.textContent = ` ${nome.toUpperCase()} SEU IMC É >${valorImc}< E VC ESTÁ ${classificar}`
    
       limparInputs()
        }

   

}

function limparInputs(){
  document.getElementById('nome').value = ''; 
  document.getElementById('alt').value = '' ;
  document.getElementById('pes').value = '' ;
}

salvar.addEventListener('click', imc);

