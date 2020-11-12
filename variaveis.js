const nome = "OnePlus 7";       //variáveis e constates podem ser
console.log(nome);              //string, number, boolean, null ou undefined

const marca = "OnePlus";
console.log(marca);

let versaoAndroid = 9.0;
console.log(versaoAndroid);

versaoAndroid = 10;
console.log(versaoAndroid);

let estaCaro = true;
console.log(typeof(estaCaro)); //revela o tipo de variável

let corDisponivel = null;

//Objeto
const smartphone = {
    nome: "Oneplus 8",
    versaoAndroid: 11,
    estaCaro: true,
};
console.log(smartphone);

//Array
const Oneplus7 = ['OnePlus 7','OnePlus', 'Gray', 1650];
console.log(Oneplus7[2]);
console.log(Oneplus7.length);