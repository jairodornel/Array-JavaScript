function Verificar(){

    var res= document.getElementById('resul');

    var vet= new Array(4);
    var vet1= new Array(4);

    for( var c= 0 ; c<vet.length; c++){
        

        vet[c]= prompt('Digite seu nome:');
        vet1[c]= Number(prompt('Digite sua idade :'))

        if(vet1[c]<18){

            res.innerHTML+= ` Nome: ${vet[c]} //// Idade: ${vet1[c]} <br>` 
        }
    
    }
       
        
    
}