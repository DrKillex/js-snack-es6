'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const squadre =[
    {
        nome: 'Pordenone',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Avellinese',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Incudinese',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: `Pulcini del Vezza d'oglio`,
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Pellaleprese',
        punti: 0,
        falliSubiti: 0
    }
];

console.log(squadre);

const squadreAggionate = squadre.map(element => {
    return {
        nome: element.nome,
        punti: getRandomInt(0, 100),
        falliSubiti: getRandomInt(0, 100)
    }
})

console.log(squadreAggionate);

// const nomiSquadre = squadreAggionate.map(element => {
//     return {
//         nome: element.nome,
//         falliSubiti: element.falliSubiti
//     }})

const squadreBastonate = squadreAggionate.map(element => {
    const {nome, falliSubiti} = element
    return {nome, falliSubiti}   
}        
)

console.log(squadreBastonate)

const container = document.querySelector('.container')

squadreBastonate.forEach(element => {
    const div = document.createElement('div')
    div.innerText = `la squadra ${element.nome} ha subito ${element.falliSubiti} falli`
    container.append(div)
})