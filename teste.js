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

//ENDERECO
//const endereco = {
//    rua: 'turmalina',
//    cidade: 'Arcos',
//    cep: 32482030,
//};
//
//function exibirEndereco(endereco){
//    for (let chave in endereco)
//        console.log(chave,endereco[chave]);
//};
//
//exibirEndereco(endereco);

//COMPARAR OBJETOS E REFERÊNCIA
//function Celular(marca,modelo,android,tela){
//    marca,
//    modelo,
//    android,
//    tela
//};
//const celular1 = new Celular('a','b','c','d');
//const celular2 = new Celular('a','b','c','d');
//
//function saoIguais(celular1,celular2){
//    return celular1.marca == celular2.marca &&
//    celular1.modelo == celular2.modelo &&
//    celular1.android == celular2.android &&
//    celular1.tela == celular2.tela;
//};
//console.log(saoIguais(celular2, celular1));
//
//function temEnderecoMemoriaIguais(celular1,celular2){
//    return celular1 === celular2;
//};
//console.log(temEnderecoMemoriaIguais(celular1,celular2));
////Se armazenássemos um objeto em uma variável, os dois ocupariam o mesmo endereço na memória

////Postagem
//let postagem = {
//    titulo: 'bitcoin',
//    mensagem: 'Bitcoin é reserva de valor',
//    autor: 'aagrbpp',
//    views: '12',
//    comentarios: [
//        {autor:'fulano',mensagem:'vdd'},
//        {autor:'ciclano', mensagem:'com certeza'},
//    ],
//    estaAoVivo: true,
//};
//console.log(postagem);

//ENCAPSULAR OBJETO COM ARRAY
//function criarPostagem(titulo, mensagem, autor) {
//    titulo,
//    mensagem,
//    autor,
//    this.views=0,
//    this.comentarios = [],
//    estaAoVivo = false
//};
//
//let postagem1 = new criarPostagem('bitcoin','bitcoin é deflacionário', 'aagrbpp');
//console.log(postagem1);

//LIMITE DE PREÇO cria array com objetos dentro
//function criarFaixa (tooltip,min,max){
//    return{
//        tooltip,
//        min,
//        max
//    };
//};
//const faixas = [
//    criarFaixa('até 999',0,999),
//    criarFaixa('de 1000 até 1999',1000,1999),
//    criarFaixa('acima de 2000',2000,99999),
//];
//console.log(faixas);