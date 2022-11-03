//1.0 Faça um progrma

const numero = prompt("Digite um valor:")
const valor = 10

if (numero < valor) {
    alert(`${numero} é menor que ${valor}`)
    console.log(`${numero} é menor que ${valor}`)
} else {
    alert(`${numero} é maior que ${valor}`)
    console.log(`${numero} é maior que ${valor}`)
}

//2.0 Faça um progama no qual o usúario deve digitar a idade do seu carro. se for maior que 3 anos imprima com alert: "Seu carro é velho". Ser menor ou igual a 3 anos imprima com alert: "Seu carro é novo".

const idadeCarro = prompt("Digite a idade de seu carro:")
const idadeMedia = 3

if (idadeCarro >= idadeMedia) {
    alert('Seu carro é velho')
} else {
    alert('Seu carro é novo')
}

//3.0 Faça um programa que peça a idade do usúario. Se for maior que 18 a mensagem deve ser: "Você pode ir preso". Se for menor "Seus pais serão presos".

const idade = prompt('Digite sua idade:')
const idadeMin = 18

if (idade >= idadeMin) {
    alert("Você pode ir preso")
} else{
    alert("Seus pais serão presos")
}

//4.0 Escreva um programa que pergunte a velocidade do carro de um usúario. Caso ultrapasse 80km/h. exiba uma mensagem dizendo que o usúario foi multado. No caso, exiba o valor da multa, cobrando 5 reais por acima de 80km/h.

const velocidadeCarro = prompt("Qual é a velocidade de seu carro")
const velocidadeMax = 80

if (velocidadeCarro > velocidadeMax) {
    alert('Você foi multado por excesso de velocidade')
    alert(`Valor da multa: ${(velocidadeCarro-velocidadeMax)*5} REAIS`)
} else{
    alert('Está no limite')
}