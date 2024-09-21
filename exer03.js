function Verificar(){

    var res= document.getElementById('resul');

    let vet = new Array(10)

    for(let c= 0 ; c< vet.length; c++){

        vet[c]= (9-c)
    }

    for(let c=0 ; c<vet.length; c++){

        res.innerHTML+= vet[c] + " . "
    }
}