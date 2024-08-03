//crie uma classe para representar carros. os carros possuem uma marca, cor e gasto medio por km rodado. crie um metodo que dado a quantidade de km e preco do combustivel nos de o valor para realizar este percurso.


// class Carros {
//   marca;
//   cor; 
//   gastoMedio;

//   constructor(marca, cor, gastoMedio){
//     this.marca = marca;
//     this.cor = cor;
//     this.gastoMedio = gastoMedio;
//   }
  
//   calcularGasto(distancia, precoCombustivel){
//     return distancia * this.gastoMedio * precoCombustivel;
//   }
// }

// const honda = new Carros('honda', 'vermelho', 1/12);
// const fiat = new Carros('fiat', 'prata', 1/12);
// console.log(honda);

// honda.calcularGasto(70,5);
// console.log(honda.calcularGasto(70,5));
// fiat.calcularGasto(70,5);
// console.log(fiat.calcularGasto(70,5));

class Carro{
  marca;
  cor;
  gastoMedio;

  constructor(marca, cor, gastoMedio){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }

  calcularGasto(distancia, preco){
    return (distancia*preco*this.gastoMedio).toFixed(2);
  }
}

const fox = new Carro('volks', 'vermelho', 1/12);
console.log(fox);
fox.calcularGasto(10,5);
console.log(fox.calcularGasto(70,5)); 

