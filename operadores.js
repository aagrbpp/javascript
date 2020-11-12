// Operadores Aritméticos + - * / ** ++ --
let oneplusPreco = 2100;
console.log((oneplusPreco*2) + 500/(2**4) - 1531.25);

let idade = 20;
console.log(++idade);    // + 1
console.log(--idade);    // - 1
console.log('------------------------------------------------------');

// Operadores de Atribuição =
let valorDolar = 5;
console.log(valorDolar)

valorDolar += valorDolar;   //Soma com ele mesmo
console.log(valorDolar);

valorDolar *=valorDolar;    //Multiplica por ele mesmo
console.log(valorDolar);

valorDolar /= valorDolar;   //Divide por ele mesmo
console.log(valorDolar);

valorDolar **= valorDolar;  //Eleva por ele mesmo
console.log(valorDolar);

valorDolar -= valorDolar;   //Subtrai por ele mesmo
console.log(valorDolar);
console.log('------------------------------------------------------');

// Operadores de Comparação
console.log(1 === 1);
console.log('1' === 1);
console.log('------------------------------------------------------');

// Operador Ternário (para reduzir if)
//Se cliente tem gasto mensal maior ou igual que 1600 então ele é rewards, senão ele é comum
let gastoMensal = 1900;
tipo = gastoMensal >= 1600 ? 'Rewards' : 'Comum';
console.log(tipo);