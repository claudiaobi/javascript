const altura = 1.80
const peso = 110
//const imc = peso / (altura * altura)
const imc = 41
console.log(imc)
if (imc<18.5){
  console.log('abaixo')
}
else if(imc>=18.5 && imc<=25){
  console.log('normal')
}
else if (imc>25 && imc<=30){
  console.log('acima')
}
else if (imc>30 && imc<=40){
  console.log('obeso')
}
else{
  console.log('obesidade grave')
}