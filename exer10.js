function Verificar(){

    var res = document.getElementById('resul');
    var res1 = document.getElementById('resul1');
    var res2 = document.getElementById('resul2');
    var res3 = document.getElementById('resul3');

   var vet = new Array(3);
   var soma = 0 
   var maior = 0 

   for( var c= 0 ; c< vet.length; c++){

    vet[c]= Number(prompt('Digite a idade ')) 

    soma = soma + vet[c] 

    if(vet[c] > 25){

        res1.innerHTML+= ` A posição acima de 25 anos é  ${c} <br>`
    }
    if(vet[c]>maior){

        maior= vet[c] 

        
    }

    if(vet[c] == maior){

        res3.innerHTML+= ` A maior idade é na posição ${c} <br>` 
    }


   }

   var med = soma / 3 

   for( var c= 0 ; c< vet.length; c++){


      res.innerHTML= " A media das idades são : " + med 
      res2.innerHTML= " A maior idade digitada é "+ maior
      


   }

    
}