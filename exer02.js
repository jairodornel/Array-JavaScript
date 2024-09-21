function Verificar(){

    var res= document.getElementById('resul');

    let vet = new Array(10)

    for(let c= 0 ; c < vet.length;c++) {

        vet[c]=(c+1)*5
    }

    for(let c =0 ; c < vet.length; c++){

        res.innerHTML+= vet[c] + " . "
    }
}