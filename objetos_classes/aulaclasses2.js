//classes
class pessoa{
  nome; 
  idade;
  anodeNascimento;

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.anodeNascimento = 2024 - idade;
  }

  descrever (){
    console.log (`meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}
 


function compararPessoas(p1, p2){
  if(p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velho que ${p2.nome}`);
  }
  else if(p2.idade > p1.idade){
  console.log(`${p2.nome} é mais velho que ${p1.nome}`);
  }
  else{
    console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade}`);
  }
}
// function compararPessoas(p1, p2){
//   if(p1.idade > p2.idade){
//     console.log(`${p1.nome} é mais velho que ${p2.nome}`);
//   }
//   else if(p2.idade > p1.idade){
//     console.log(``${p2.nome} é mais velho que ${p1.nome}``);
//   }
//   else{
//     console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`); 
//   }
// }

const leonardo = new pessoa('leonardo', 21);
const naomi = new pessoa('claudia', 20);

console.log(leonardo);
console.log(naomi);

compararPessoas(leonardo,naomi);

