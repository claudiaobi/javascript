const precoProduto = 100
const debito = precoProduto * 0.9
const dinheiro = precoProduto * 0.85
const acima = precoProduto *1.1
const pagamento = 3

console.log(precoProduto)

if(pagamento === 1){
  console.log(debito)
}
else if (pagamento === 2){
  console.log(dinheiro)
}
else if (pagamento === 3){
  console.log(acima)
}
