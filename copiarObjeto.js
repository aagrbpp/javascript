const celular1 = {
    fabricante: 'ZTE',
    modelo:'Nubia M2',
    tela: 5.5,
    cpu: 'sd625'
};

//copiar objeto diretamente:
const celular2 = {...celular1};

//copiar objeto e adicionar propriedades ao objeto
const celular3 = Object.assign({
    hd: '64GB',
},celular1);