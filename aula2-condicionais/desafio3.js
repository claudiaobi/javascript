const nota1 = 5
const nota2 = 3
const nota3 = 7

let media = ((nota1+nota2+nota3)/3)

if (media<5){
  console.log('reprovado');
}
else if(media>=5 && media<=7){
  console.log('recuperacao')
}
else{
  console.log('aprovado')
}
