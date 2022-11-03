//Crie uma função matemática que retorne o perímetro de quadrado.
//lembrando: perímetro é a soma dos quatro lados do quadrado.

function perímetro(a){
    var total = 4*a
    console.log(total)
}

perímetro(8)

//Crie uma função que retorne o seu nome completo.
//ela deve possuir os parâmetros: nome sobrenome.

function NomeCompleto(nome,sobrenome){
    var NomedoCidadao = nome + " " + sobrenome
    console.log(NomedoCidadao)
}

NomeCompleto('Marcelo','Ferreira')

//Crie uma função que verifica se um número é par.

function par(numero){
    if(numero % 2 == 0){
        console.log('par')
    }else{
        console.log('impar')
    }
}



//var conta = numero % 2 == 0;