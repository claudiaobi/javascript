function tipo(pagamento){
  if (pagamento===1){
    return(precoInicial - (precoInicial * 0.1))
  }
  else if (pagamento===2){
    return(precoInicial - (precoInicial*0.15))
  }
  else if (pagamento===3){
    return(precoInicial)
  }
  else if (pagamento===4)
  {
    return(precoInicial+(precoInicial*0.1))
  }
}

const precoInicial = 100;
const pagamento = 4;
console.log(tipo(pagamento));


