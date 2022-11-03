//Objetos
//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
    nome: 'Grazi',
    idade: 20,
    profissão: 'Monitora do professor Bonitão',
    MaiordeIdade: true,
}
console.log(pessoa)
console.table(pessoa)
pessoa.nome // Grazi

//Método
// É uma propriedade que possui uma função no local do seu valor

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado*lado;
    },
    perimetro: function(lado){
        return quadrado.lados* lado;
    }, 
}

quadrado.area(5)

//Acesse propriedade de um objeto utilizando o ponto.

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

var bg = menu.backgroundColor

//Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome.

var euPessoa = {
    nomeEu: 'Marcelo',
    sobrenome: 'Ferreira',
    profissão: 'Desempregado',
    comidaFavorita: 'Strogonoff',
    MaiordeIdade: false,
}
console.table(euPessoa)   

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem.
var Cachorro = {
    raça: 'Labrador',
    cor: 'preto',
    idade: 10,
    caracteristica: 'Late ao ver um homem'
}
console.table(Cachorro)

//Arrays
//É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variavel.

var videoGames = ['PS4', 'Switch', 'Xbox'];
videoGames[0]

//Métodos e Propriedades de uma array

console.log(videoGames.length);