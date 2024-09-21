function Verificar(){

    var res= document.getElementById('resul');

    var vet = new Array(15);

    vet[0]= 1
    vet[1]=1

    for(var c = 2 ; c< vet.length; c++){

       
        vet[c]= vet[c-1] + vet[c-2]

    }


    for(var c= 0 ; c< vet.length; c++){

        res.innerHTML+= vet[c] + " . "
    }
}