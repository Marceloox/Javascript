//Array

//É um grupo de valores. servem para guardarmos diferentes valores em uma única variável.
/* 
var videoGames = ['Switch', 'PS4', 'Xbox'];

var numeros = [1, 2, 3]
var soma = numeros[0]+numeros[1]
console.log(soma)

videoGames.pop();//Remove o último item e retorna da Array.
videoGames.push('3DS');//Adiciona ao final da array
videoGames.length//retorna a quantidade de valores.

//While

var i = 0;
while(i<=10){
    console.log(i)
    i = i + 1
}

//for
for(var numero = 0; numero <=10; numero = numero + 1){
    console.log(numero)
}
*/
/*
var videoGames = ['Switch', 'PS4', 'Xbox'];
for (var b = 0; b < videoGames.length; b = b + 1){
    console.log(videoGames[b])
}
*/
//ForEach
//ForEach é um método que executa uma função para cada item da Array. é uma forma mais simples de utilizarmos um loop com arrays

var videoGames = ['Switch', 'PS4', 'Xbox'];
videoGames.forEach(function(b,c, d){
    console.log(b,c,d)
})

//Crie uma array com os anos que o Brasil ganhou a copa 1958, 1962, 1970, 1994, 2002.

var copas = ['1958', '1962', '1970', '1994', '2002']

//Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, 'o brasil ganhou a copa de ${ano}'

copas.forEach(function(copas){
    console.log(`O Brasil ganhou a copa de ${copas}`)
})