//Boolean

//Existem dois valores booleanos false ou true
//var LulaEleito = false

var LulaEleito = true

if (LulaEleito){
    console.log('Vamos comer picanha')
}else {
    console.log("Bolsonaro vai criar o pix")
}

//Operadores relacionais

/*
    == -> igualdade
    > -> maior que
    < -> menor que
    != -> diferente
    >= -> maior ou igual
    <= -> menor ou igual
*/

var a = 1,
    b = 5,
    c = 2,
    d = 1;

    console.log(a > b) //false
    console.log(a < b) //true
    console.log(a == d) //true 
    console.log(b >= a) //true 
    console.log(c <= b) //true
    console.log(d != a) //false
    console.log(d != b) //true

//Condições
/*
    if e else
    if é condição verdadeira ("se for verdade ...")
    else é a condição falsa (Se não ..... é falso)

    if (condição){
        bloco verdadeiro
    } else{
        bloco falso
    }
*/

var GraziFazFaculdade = true
if (GraziFazFaculdade){
    console.log("Grazi vai se formar")
} else{
    console.log("Grazi não daz faculdade")
}

let valor1 = 5,
    valor2 = 7,
    valor3 = 5,
    valor4 = 2;

if (valor1 > valor2){
    console.log("Valor1 é maior que valor2")
} else{
    console.log("valor1 não é maior que valor2")
}   


if (valor3 != valor1) {
    console.log("valor3 é diferente do valor1")
} else{
    console.log("valor3 é igual o valor1")
}
 
const nome = prompt('Digite o seu nome: ')
console.log(nome)

//CONDICIONAIS ELSE IF

var GraziPossuiGraduacao = true;
var GraziPossuiDoutorado = false;

if (GraziPossuiDoutorado) {
    console.log('Possui graduação e doutorado')
} else if (GraziPossuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado')
} else{
    console.log('Não possui graduação')
}


var categoria = prompt("Digite a categoria do produto")

if (categoria == 1){
    console.log('Preço R$10,00')
}else if (categoria == 2){
    console.log('Preço é R$18,00')
}else if(categoria == 3){
    console.log('Preço é R$23,00')
}else if(categoria == 4){
    console.log('Preço é R$26,00')
}else if(categoria == 5){ 
    console.log('Preço é R$31,00')
}else{
    console.log("Categoria inválida, digite um valor entre 1 e 5!")
}

//switch

var corFavorita = 'Preto'

switch (corFavorita){
    case 'Preto':
        console.log('Yasmin usava calça colorida.')
        break;
    case 'Vermelho':
        console.log('Yasmin apaixonada')
        break;
    case 'Amarelo':
        console.log('Yasmin torce pro criciúma')
        break        
}


//operadores lógicos &&
// && = e

console.log(true && true) //
console.log(false && true) //




//exercicios
//Verifique se a sua idade é maior de que a de algum parente

let idadeEu = prompt('Digite sua idade:')
let idadeMin = 26

if ( idadeEu >  idadeMin) {
    alert("Eu sou mais velho")
} else{
    alert("Eu sou mais novo")
}

//escreva um programa que pergunte a distância que um passageiro deseja percorrer em km. Calcule o preço da passagem, cobrando R$0,50 por km para viagens de até 200km, e R$0,45 para viagens mais longas

const distância = parseInt (prompt("Digite a distancia que quer percorrer em km?"))

if (distância <= 200){
    var custo = km * 0.5;
    console.log(custo)
} else if (distância > 200) {
    var custo1 = distância * 0.45;
    console.log(custo1)
}