const precoEtanol = 5.79
const precoGasolina = 6.66
const kmporlitro = 10
const distancia = 100
let entrada = 'etanol'

if (entrada === 'etanol'){
  console.log((distancia/kmporlitro)*precoEtanol)
}
else{
  console.log((distancia/kmporlitro)*precoGasolina)
}
