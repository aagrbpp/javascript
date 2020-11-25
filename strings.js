//string simples
const texto = 'ESSE TEXTO É SIMPLES';
console.log(typeof(texto));

//string em objeto
const objeto = new String('ESSE TEXTO É UM OBJETO');
console.log(typeof(objeto));

//Data
const data1 = new Date();//Pega a data e hora atual
const data2 = new Date(1999,05,15,14,00);//Definindo a data: ano, mês(janeiro é mês 0), dia, hora, minuto.

//Tamplate Literal: shift+tecla
const nome = 'Ana';
const menssagem = 
`${data2}
Oi ${nome},

essa 'mensagem' é só pra testes.

Atenciosamente,
aagrbpp.`;