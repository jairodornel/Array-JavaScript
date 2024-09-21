function Verificar(){

    var res= document.getElementById('resul');

    var vet = new Array(10);

    for( var c = 0 ; c< vet.length; c++){

        var n = Number(prompt('Digite um número: '));

        if(n%2==0){

            vet[c]= "  Posição  "+ c + "  é par  "+ n 
        }else{

            vet[c]=n 
        }
    }

    for(var c = 0 ; c<vet.length; c++){

        res.innerHTML+= ` ${vet[c]} <br>` 
    }
}