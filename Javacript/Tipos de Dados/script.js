//Tipos de dados

//6 tipos de dados.

var nome = "Marcelo" // String --> conjunto de caracteres representado por ""(aspas duplas) ''(aspas simples) ``()

var idade = 26 // number

var AssassinsCreedMelhorJogo = true // Boolean --> pode ser representado por true ou false

var tempo; // undefined

var comida = null; // null 

var novoObjeto = {} // Object

//Verificar tipo de dados

const nome_pessoa = 'John'
const idade1 = 30
const MediaFaculdade = 4.5 
const legal = true
const notaDematemática = null
let notaDeDesenho;

//verificar tipo de dados
//typeof

console.log(typeof nome_pessoa)
console.log(typeof idade1)
console.log(typeof MediaFaculdade)
console.log(typeof legal)
console.log(typeof notaDematemática)
console.log(typeof notaDeDesenho)

//Objeto 

let FaculdadeAlunos = {
    nome_pessoa1: 'André',
    idade2: 28,
    MediaFaculdade1: 7.5,
    legal: false,
    notaDematemática: 8,
    notaDeDesenho: 7,
}

console.log(typeof FaculdadeAlunos)
console.log(FaculdadeAlunos)
console.log(FaculdadeAlunos.nome_pessoa1)
console.log(typeof FaculdadeAlunos.nome_pessoa1)

//Concatenar (+) Strings
const pessoa = 'Irmão do Jorel';
const idade3 = 16;

console.log(pessoa + ' ' + idade3)
console.log('meu nome é ' + pessoa + ' e eu tenho ' + idade3 + ' anos')

//Concatenar (+) Strings

const aluno = 20
const sobreNome = 30

console.log(aluno + sobreNome)

//Template String
const hello = `Meu nome é ${pessoa} e eu tenho ${idade3} anos`
console.log(hello)

//Declare uma variável contendo uma string

var nome2 = 'civic'

//Declare uam variável contendo um número dentro de uma string

var dinheiro = "50"

//Declare uma variável com a sua idade

var idade4 = 16

//Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas

var nome3 = 'Marcelo';
var sobreNome1 = 'Ferreira';
console.log(nome3 + ' ' + sobreNome1)    

//coloque a seguinte frase em uma variável: It's time

var frase = "It's time"

// VErifique o tipo da variável que contém o seu nome

console.log(typeof nome3)