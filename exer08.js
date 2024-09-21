function Verificar(){

    var res= document.getElementById('resul');

    var vet = new Array(15);

    for( var c= 0 ; c<vet.length; c++){

        var n = Number(prompt('Digite um número:'));

        if(n%10==0){

            vet[c]= "["+ n + "]"
        } else{

            vet[c]= n 
        }
    }

    for(var c= 0 ; c< vet.length; c++){

        res.innerHTML+= vet[c] + " . "
    }
}