const nome = prompt("Qual é o seu nome?");
const idade = Number(prompt("Qual é a sua idade?"));
console.log(typeof nome);
console.log(typeof idade);
/*O valor de uma variável gerada dentro do prompt sempre será tipo string caso não tenha sido especificado o tipo necessário antes.*/
console.log("Olá,",nome,". Você tem",idade,"anos.");
const questaoA = prompt("Está feliz hoje? Sim/Não");
console.log("Você está feliz hoje? Sim/Não",questaoA);
const questaoB = prompt("Já bebeu água hoje? Sim/Não");
console.log("Já bebeu água hoje?",questaoB);
const questaoC = prompt("Está usando preto? Sim/Não");
console.log("Está usando preto?",questaoC);