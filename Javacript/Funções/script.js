//Funções

/*
    function nome(parâmetros){
        bloco de ações
    }
*/
var a = 5
var b = 6

var total = a + b

console.log(total) 

function soma(a,b){
    var total = a + b
    return console.log(total)
}

soma(7,8)
soma(10,20)

//Crie uma função que ache área de um retângulo de medidas diferentes.

function areaDoRetângulo(ladoA,ladoB){
    var multiplicacao = ladoA*ladoB
    return console.log(multiplicacao)
}

areaDoRetângulo(8,9)

//Crie uma função que ache área de um quadrado.

function área(ladoC){
    var multiplicacao = ladoC*ladoC
    return console.log(multiplicacao)
}

área(8) //Argumento

function pi(){
    return 3.1415
}

var total = 5 + pi(); //8.1415
console.log(total)

//Parênteses executa a função

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Você gosta do céu'
    }else if(cor === 'verde'){
        return 'Você gosta de mato'
    }else{
        return 'Você gosta de nada'
    }

}

corFavorita("Azul")


function Weslei(){
    console.log('Cachorro Louco')
    return
}

addEventListener('Click',Weslei())