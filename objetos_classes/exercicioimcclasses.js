/*crie uma classe para representar pessoas. 
para cada pessoa teremos os atriutos nome, peso, altura.
as pessoas devem ter a capacidade de dizer o valor do IMC (IMC * peso/ (altura*altura));
instancie uma pessoa chamada jose que tenha 70kg de peso e 1,75 de altura e peça ao jose para dizer o valor do seu imc
*/

class Pessoa{
  nome;
  peso;
  altura;

  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC(altura, peso){
    const resultado = peso/(altura*altura)
    return resultado.toFixed(2)
  }

  classificarIMC(){
    const IMC = this.calcularIMC(this.altura, this.peso);
    if(IMC<18.5){
      return 'abaixo do peso';
    }
    else if(IMC<24.9 && IMC>=18.5){
      return 'normal';
    }
    else if(IMC>=24.9 && IMC<40){
      return 'acima';
    }
    else {
      return 'bem gordin';
    }
  }
}

const leonardo = new Pessoa('Leonardo', 70, 1.75);
console.log(leonardo);
console.log(leonardo.calcularIMC(1.75, 70));
console.log(leonardo.classificarIMC());

// class Pessoa {
//   constructor(nome, peso, altura) {
//     this.nome = nome;
//     this.peso = peso;
//     this.altura = altura;
//   }

//   calcularIMC() {
//     const IMC = this.peso / (this.altura * this.altura);
//     return IMC;
//   }

//   classificarIMC() {
//     const IMC = this.calcularIMC();

//     if (IMC < 18.5) {
//       return 'abaixo do peso';
//     } else if (IMC >= 18.5 && IMC < 24.9) {
//       return 'normal';
//     } else if (IMC >= 24.9 && IMC < 30) {
//       return 'sobrepeso';
//     } else if (IMC >= 30 && IMC < 40) {
//       return 'obesidade';
//     } else {
//       return 'obesidade grave';
//     }
//   }
// }

// // Exemplo de uso:
// const leonardo = new Pessoa('Leonardo', 70, 1.75);
// console.log(leonardo.nome); // Saída: Leonardo
// console.log(leonardo.calcularIMC()); // Saída: 22.86
// console.log(leonardo.classificarIMC()); // Saída: normal


