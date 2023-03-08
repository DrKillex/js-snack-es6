'use strict';

const studenti = [
    {
        Id: 213,
        Nome: 'Marco della Rovere',
        Grades: 78
    },
    {
        Id: 110,
        Nome: 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id: 250,
        Nome: 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id: 145,
        Nome: 'Gaia Borromini',
        Grades: 74
    },
    {
        Id: 196,
        Nome: 'Luigi Grimaldello',
        Grades: 68
    },
    {
        Id: 102,
        Nome: 'Piero della Francesca',
        Grades: 50
    },    
    {
        Id: 120,
        Nome: 'Francesca da Polenta',
        Grades: 84
    }
];

console.log(studenti)

const listaNomiUpperCase = studenti.map(element => {return element.Nome.toUpperCase()})
console.log(listaNomiUpperCase)

const studentiVoto70 = studenti.filter((element) => {
    if (element.Grades > 70){
        return element
    }
})

console.log(studentiVoto70)

const studentiVoto70Id120 = studenti.filter((element) => {
    if (element.Grades > 70 && element.Id > 120){
        return element
    }
})

console.log(studentiVoto70Id120)