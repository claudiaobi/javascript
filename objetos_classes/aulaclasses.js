class pessoa{
  nome;
  idade;

  descrever (){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const leonardo = new pessoa();
leonardo.nome = 'leonardo';
leonardo.idade = 21;

const claudia = new pessoa();
claudia.nome = 'claudia';
claudia.idade = 20;

leonardo.descrever();
claudia.descrever();