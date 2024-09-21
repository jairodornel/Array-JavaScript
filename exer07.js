function Verificar(){

    var res= document.getElementById('resul');

    var vet= new Array(7);

    for(var c=0; c<vet.length; c++){

        var nome= prompt('Digite seu nome:');

        vet[c]= nome

    }

    for(var c= 6 ; c>=0; c--){

        res.innerHTML+= ` O nome é ${vet[c]} <br>` 
    }
}