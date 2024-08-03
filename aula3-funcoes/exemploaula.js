
function somarpercentual (valor, juros){
  const valorpercentual = (juros/100)*valor;
  return valor + valorpercentual;
}

console.log(somarpercentual(100,10));