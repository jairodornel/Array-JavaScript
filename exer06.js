function Verificar(){

    var res= document.getElementById('resul');

    var vet = new Array(7);
    
  // var ale= Math.floor(Math.random() * 100);

    

    for( var c= 0 ; c< vet.length; c++){

        var ale= Math.floor(Math.random() * 100);

        vet[c]= ale 
    }

    for( var c = 0 ; c< vet.length; c++){

        res.innerHTML+= vet[c] + " . "
    }
}