var valor1 = parseInt(prompt('Digite um valor:'))
var valor2 = parseInt(prompt('Digite outro valor:'))
var operacao = prompt('Qual operação você deseja fazer?')

if(operacao == '+'){
    console.log(valor1+valor2)
}else if(operacao == '-'){
    console.log(valor1-valor2)
}else if(operacao == '*'){
    console.log(valor1*valor2)
}else {
    console.log("Coloque uma operação válida")
}