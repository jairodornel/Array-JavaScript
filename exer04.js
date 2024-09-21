function Verificar(){

    var res = document.getElementById('resul');

    var vet = new Array(10);

    for(var c = 0 ; c< vet.length; c++){

        if(c%2==0){

            vet[c]= 5 
        } else{

            vet[c]=3
        }
    }

    for(var c = 0 ; c< vet.length; c++){

        res.innerHTML+= vet[c] + " . "
    }
}