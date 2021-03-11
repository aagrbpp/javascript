//Orientação a Objetos JavaScript (OOJS)
//Objeto Simples
var celularUm = {                                   //essa variável é um objeto
    modelo:'Nubia M2',
    cpu: 'sd625',
    tela: 5
};

//Copiando objetos
var celularDois = celularUm;                        //Cópia direta que compartilha mesma memória
celularDois.tela = 5.5;                             //Alterar o celularDois também altera o celularUm

var celularTres = Object.create(celularUm);         //Herda as propriedades do objeto mas é independente
celularTres.tela = 6.4;                             //Alterar celularTres não afeta o celularUm

//Adicionando key values para um objeto já existente
celularTres.fabricante = 'ZTE';
var ramKey = 'ram';
var ramValue = 4;
celularTres[ramKey] = ramValue;

//Prototype
//Objetos já possuem suas propriedades pré definidas e as que definimos
//Arrays, funções, variáveis e objetos possuem as próprias propiedades
//Tudo em JS é objeto, logo arrays, funções e variáveis tem propriedades de objetos também
console.log(celularTres.hasOwnProperty('cpu'));     //celularTres herdou a propriedade cpu de celularUm
console.log(celularTres.hasOwnProperty('ram'));     //Definimos uma propriedade para o próprio celularTres

//Objeto Complexo
function Person(first,last,age,gender,interest){    //Um construtor é uma função, e uma função é um objeto
    this.name = {
        'first':first,
        'last':last,
    };
    this.age = age;
    this.gender = gender;
    this.interest = interest;
    this.bio = function(){
        var string = this.name.first+' '+this.name.last+' is '+this.age+' years old. '
        
        if (this.gender==='Male'){
            string+='He likes ';
        }else if (this.gender==='Female'){
            string+='She likes';
        }else{
            string+='This person likes ';
        }

        if (this.interest.length===1){
            string+=this.interest[0]+'.';
        }else if (this.interest.length===2){
            string+=this.interest[0]+' and '+this.interest[1]+'.';
        }else{
            for(var i=0; i<this.interest.length; i++){
                if (i===this.interest.length-2){
                    string+=this.interest[i]+' e '+this.interest[i+1]+'.';
                    i=i+2;
                }else{
                    string+=this.interest[i]+', ';
                }
            }
        }

        alert(string);
    }
}
var alex = new Person('Alex','Andre',26,'Male',['food','music','animes','animals','technologies']);