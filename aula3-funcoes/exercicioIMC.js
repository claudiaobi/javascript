function calcularIMC (peso, altura){
  return peso / (altura * altura);
}

function classificarIMC (imc){
  if (imc<18.5){
    return('abaixo')
  }
  else if(imc>=18.5 && imc<=25){
    return('normal')
  }
  else if (imc>25 && imc<=30){
    return('acima')
  }
  else if (imc>30 && imc<=40){
    return('obeso')
  }
  else{
    return('obesidade grave')
  }
}

function main (){
  const altura = 1.80
  const peso = 110
  const imc = calcularIMC (peso, altura)
  console.log(classificarIMC (imc));
}
main ();
