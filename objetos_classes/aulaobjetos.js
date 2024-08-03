
const pessoa = {
  nome: 'leonardo',
  idade: 10,

  frase: function (){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`)
  }
}

pessoa.frase()

