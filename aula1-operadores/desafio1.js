// faça um programa para calcular o valor de uma viagem
// 1- preco do combustivel
// 2- gasto medio de combustivel por km
// 3- distancia em km
// imprima no console o valor que sera ggasto na viagem

const precoCombustivel = 5.79
const kmporlitro = 1
let distancia = 100
let total = (precoCombustivel / kmporlitro) * distancia
console.log(total)
total = (distancia / kmporlitro) * precoCombustivel
console.log(total)
