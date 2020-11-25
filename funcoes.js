//Função (o nome sempre é ação+substantivo ex.: apagarLux)
//Parâmetro é o que tem entre parênteses
//Função sem parâmetro
let modoSite = 'White';
function modoNoturno(){
    modoSite = 'Black'
};
console.log(modoSite);
modoNoturno();
console.log(modoSite);

//Função com um parâmetro
let fonte = 'Times New Roman';
function trocarFonte(familia){
    fonte = familia;
}
console.log(fonte);
trocarFonte('Arial');
console.log(fonte);

//Função com mais de um parâmetro
let corSite = 'Preto';
function trocarCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
}
console.log(corSite);
trocarCor('Cinza','Claro');
console.log(corSite);

//Função retorna algo que não precisa calcular
function dizerNome(){
    console.log('Alex');
}
dizerNome();

//Função realiza uma tarefa para retornar algo
function multiplicaPorDez(valor){
    return valor*10;
}
console.log(multiplicaPorDez(2))