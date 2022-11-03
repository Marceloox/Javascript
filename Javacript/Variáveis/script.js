/*Variáveis*/

/*Responsáveis por guardar dados na memória. Inicia com a palavra 'var', 'let' ou 'const'*/

var nome = 'Grazi';
console.log(nome)
let idade = 28;
console.log(idade)
let idade2 = '28';
console.log(idade2)
const PossuiFaculdade = true;
console.log(PossuiFaculdade)

/*Pequenos Calculos*/

var conta = 20 + 5;
console.log(conta)

var preco = 80000
var prestacao = 60
var precoMensal = preco / prestacao
console.log(precoMensal)

/*Sintaxe*/

var idade3 = 19;
var nome1 = 'Gabriel';
var apelido = 'fifinha';

var idade3 = 19, 
    nome1 = 'Gabriel',
    apelido = 'fifinha';

/*Sem Valor*/
var precoAplicativo;
console.log(precoAplicativo)   
//retorna undefined

/*
1- Os nomes das variáveis podem iniciar com $ , _ ou letras. Podem conter números mas não iniciar com eles

2-Maiúsculo ou Minúscula. Nome é diferente de NOME.

3- Não usar palavras reservadas.

4- Caixa de camelo: É comum nomearmos assim: AbrirModal;
*/

/*Exemplo*/
//Inválido
/*var #nome;
var function;
var 1possuiFaculdade;
*/
//Válido

var $selecionar;
var _nome;
var Possui_Faculdade;

//Declarar

//console.log(curso);
//retorna curso is not defined

//Mudar o valor atribuido

var idade4 = 19;
idade4 = 27;
console.log(idade4)

let preco2 = 50;
preco2 = 25;
console.log(preco2)

/*const possuiCarro = 25
possuiCarro = 23
console.log(possuiCarro)*/

/*Exercício

// Declarar uma variavel com seu nome

// Declarar uma variavel com sua idade

// Declarar uma variavel com sua comida favorita e não atribuir valor

// Atribuir valor a sua comida favorita

// declarar 5 variaveis diferentes sem valores

//Crie duas variaveis com valores diferentes, faça a multiplicação entre elas e imprima no console.log o resultado
*/

var nome2 = 'Marcelo',
    idade5 = 16,
    comidaFavorita;

var comidaFavorita = 'strogonoff'

let gol,
    fox,
    chevette,
    jetta,
    tiguan;

var valor = 6
    value = 6
    total = valor * value
console.log(total)    

/*Revisão*/

console.log(2 * 10)
console.log(2 - 10)
console.log(2 + 10)
console.log(10 / 3)
console.log(10 % 3)

//revisão de variáveis

var nome5 = 'Marcelo'
console.log(nome5)

var valor3 = 7
var valor4 = 3 
var resultadoDaSoma = valor3 + valor4
console.log(resultadoDaSoma)