////Número divisível por 5 e/ou 3
//let resultado = FizzBuzz(0);
//console.log(resultado);
//
//function FizzBuzz (entrada){
//    if (typeof entrada !== 'number')        //verifica se a entrada é um numero
//        return 'Não é um número';
//    if (entrada%3===0 && entrada%5===0)     //verifica se quando dividido por 3 e 5 resta 0
//        return 'FizzBuzz';
//    if (entrada%3!==0 && entrada%5!==0)     //verifica se quando dividido por 3 e 5 não resta 0
//        return entrada;
//    if (entrada%3===0)
//        return 'Fizz';
//    if (entrada%5===0)
//        return 'Buzz';
//}
//
////Teste de velocidade
//verificaVelocidade(129);
//function verificaVelocidade(velocidade){
//    let a = 0;
//    if (velocidade>70){
//        a = Math.floor((velocidade-70)/5);
//        if (a>=12){
//            console.log('Carteira suspensa');
//        }else{
//            console.log('Mais '+a+' pontos na carteira');
//        }
//    }else{
//        console.log('tudo bem');
//    }
//}
//
////Par ou ímpar
//function parImpar(n){
//    do{
//        if (n%2===0){
//            console.log(n+' é par');
//        }else{
//            console.log(n+' é ímpar');
//        }
//        n--;
//    }while(n>0);
//}
//parImpar(7);
//
////Retornar string do objeto
//const celular = {
//    marca:'OnePlus',
//    modelo:7,
//    cpu:855,
//    tela:'amoled',
//    os:'OxygenOS'
//}
//
//function retornarString(objeto){
//    for (chave in objeto){
//        if(typeof objeto[chave]==='string'){
//            console.log(chave,objeto[chave]);
//        }
//    }
//}
//retornarString(celular);
//
////Somar os múltiplos de 5 e 3
//
//function somar(limite){
//    let numero = 0;
//    do {
//        if (limite%3===0 || limite%5===0){
//            numero = numero+limite;
//            --limite;
//        }else{
//            --limite;
//        }
//    }while (limite>0);
//    console.log(numero);
//};
//somar(15);

////Fazer a média das notas
//const array =[80,70,100];
//
//function media(n){
//    let numero = calculaMedia(n);
//    if (numero<60) return 'F';
//    if (numero<70) return 'D';
//    if (numero<80) return 'C';
//    if (numero<90) return 'B';
//    return 'A';
//}
//
//function calculaMedia(notas){
//    let soma= 0;
//    for (let nota of notas){
//        soma = soma+nota;
//    }
//    return soma/(notas.length);
//}
//console.log(media(array));

////Exiba x número de asterísticos
//function exibeAsteristico(n){
//    let qtt = n;
//    let linha = '';
//    do{
//        linha = linha+'*';
//        --qtt;
//    }while(qtt>0);
//    return linha;
//}
//console.log(exibeAsteristico(10));

//Números primos
