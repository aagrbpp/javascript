// Operadores Lógicos && || !
//Definir se o país é bom
let liberdadeEconomica = true;
let liberdadeIndividual = true;
let paisBom = liberdadeEconomica && liberdadeIndividual;    //Todas as condições têm que ser verdadeiras
console.log(paisBom);

if (liberdadeEconomica || liberdadeIndividual){             //Pelo menos uma tem que ser verdadeira
    console.log('Poderia ser melhor');
}

let paisRuim = !paisBom;
console.log(paisRuim);
console.log('-----------------------------------------------');

//Comparação de operadores não booleanos
//Falsos: null, undefined, 0, '', NaN