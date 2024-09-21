function Verificar(){

    var res= document.getElementById('resul');
    var res1= document.getElementById('resul1');
    var res2= document.getElementById('resul2');
    var res3= document.getElementById('resul3');


    var vet = new Array(3);
    var soma = 0 
    var mMed=0
    var maior=0

  for(var c=0 ; c<vet.length;c++){

    vet[c]= Number(prompt('Digite a nota : '));
    soma= soma + vet[c]
   
    var med = soma/3

    if(vet[c] > med){

       mMed= mMed + 1
    }

    if(vet[c]>maior){

        maior= vet[c]

        res3.innerHTML= " A posição da maior nota é " + c
    }


  }
    

    res.innerHTML=  " A media de notas é :" +med
    res1.innerHTML= " Qtd de alunos maior que a media são : "+ mMed
    res2.innerHTML= "A maior nota digita é : "+ maior
}