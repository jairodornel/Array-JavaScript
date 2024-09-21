function Verificar(){

    var res= document.getElementById('resul');

    var vet= new Array(3);
    var vet1= new Array(3);
    var vet2= new Array(3);


    for(var c= 0; c<vet.length; c++){

        vet[c]= prompt('Digite seu nome :');
        vet1[c]= prompt('Digite o sexo M/F : ');
        vet2[c]= Number(prompt('Digite o seu salario: ')); 

        if(vet1[c]=='F' && vet2[c]> 5000){

            res.innerHTML+= ` Nome : ${vet[c]} /// Sexo : ${vet1[c]} ///   Salario ${vet2[c]} <br>`
        }
    }
}