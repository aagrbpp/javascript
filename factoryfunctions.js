//Objetos pré-definidos. Ex: vc precisa cadastrar dezenas de celulares com menos código possivel.

//Versão bem reduzida de como fazer o objeto pré-definido
//criamos uma função para emcapsular o objeto pre definido:
function criaCelular(marca,modelo,tela,android,bateria){
    //quando a chave e o valor tem o mesmo nome, só precisa declarar um.
    //Ex: ao invés de "marca: marca," só precisamos de "marca,"
    return {
        marca,
        modelo,
        tela,
        android,
        bateria
    };
};
//e assim podemos criar um objeto novo, armazenando numa variável:
const celular1 = criaCelular('Samsumg','A31',6.4, 10,5000);
console.log(celular1);