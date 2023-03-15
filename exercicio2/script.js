let a = 2;
let b = 4;
let c;

c = a;
a = b;
b = c;
console.log(a)
console.log(b)
/* A lógica é que a variável "c" foi criada p/ ser a ponte entre a troca do valor de "a" e "b". A variável "c" recebeu o valor de "a"e já guardou o valor de "a". Agora "a" já pode receber um novo valor, que é o valor de "b" e "b" já pode receber o valor de "c" que guardou o valor anterior de "a".*/