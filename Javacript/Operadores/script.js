//Números

var idade = 28;
var pi = 3.1415; // ponto para decimala
var numero = 30000;
var exp = 2e10; //

console.log(exp)

//Operadores aritmeticos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2**4; // 16 // 2*2*2*2 = 16
var modulo = 14 % 5; // 4

//Exercício

//Converta as seguintes espressões matemáticas para que possuem ser calculadas usando o Javascript

//10+20+30
//4 elevado a 2 dividido por 30
//(9 elevado a 4 mais 2) vezes 6 menos 1

let conta = 10 + 20 + 30;
console.log(conta)

let conta2 = (4**2)/30; 
console.log(conta2)

let conta3 = ((9**4)+ 2 ) * 6 - 1;
console.log(conta3)

//Operadores Aritméticos (strings)

var soma2 = '100' + 50;
console.log(soma2) //10050
var subtracao2 = '100' - 50;
console.log(subtracao2) // 50
var multiplicacao2 = '100' * '2'
console.log(multiplicacao2)
var weslei = '100*2' + 50;
console.log(weslei)
var lais = '100' * 2;
console.log(lais)

var divisao2 = 'comprei 10' / 2;
console.log(divisao2) //NaN (Not a Number)

//A ordem importa

//Começa por radiação e exponenciação, multiplição e divisão, depois soma e subtração  

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 

//Operadores Aritméticos Unários

var icrementado = 5;
console.log(++icrementado)