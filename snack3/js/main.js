'use strict';
// lista bici
const bici = [
    {
        Nome: 'Rovere',
        peso: 78
    },
    {
        Nome: 'Cortellessa',
        peso: 96
    },
    {
        Nome: 'Mantegna',
        peso: 48
    },
    {
        Nome: 'Borromini',
        peso: 74
    },
    {
        Nome: 'Grimaldello',
        peso: 68
    },
    {
        Nome: 'Francesca',
        peso: 50
    },    
    {
        Nome: 'Polenta',
        peso: 84
    }
];

console.log(bici)
// filter per trovare la bici piu leggera
const biciLeggera = bici.filter(element => {
    const pesoBiciLeggera = Math.min(...bici.map(element => {
        return element.peso
    }));
    if (element.peso === pesoBiciLeggera){
        return element
    }
})

console.log(biciLeggera)
//destrutturazione
const [{Nome, peso}] = biciLeggera

console.log(Nome)
console.log(peso)

console.log(`la bici piu leggera è ${Nome} e pesa ${peso}kg`)
// stampo la destrutturazione
const container = document.querySelector('.container')
const div = document.createElement('div')
div.innerText = `la bici piu leggera è ${Nome} e pesa ${peso}kg`
container.append(div)