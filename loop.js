//FOR
for (let i=1; i<=8; i++){
    if(i%2==0){     //quando o número é par, ou seja, divisível por dois, o resto é igual a 0
        console.log(i+' é um número par');
    }
}

//WHILE
let i = 10;
while(i>=1){
    if(i%2!==0){
        console.log(i+' é um número ímpar');
    }
    i--;
}

//DO..WHILE (mais coerente que os outros)
i = 1;
do {
    console.log('Digitando');
    i++;
}while(i<=13);

//FOR..IN
const celulares = [
    {marca:'OnePlus', modelo:'7'},
    {marca:'Apple', modelo:'X'},
    {marca:'Realme', modelo:'6 PRO'},
    {marca:'Samsung', modelo:'A31'},
    {marca:'Motorola', modelo:'G8 Plus'}
];

for (let chave in celulares){
    console.log(celulares[chave].marca, celulares[chave].modelo);
}

//FOR..OF (mais coerente que FOR..IN)
for (let chave of celulares){
    console.log(chave.marca, chave.modelo);
}