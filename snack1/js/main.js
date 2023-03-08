'use strict';
//nome tavolo
const nomeTavolo = 'Tavolo Vip';
//lista invitati
const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

console.log(invitati);

//lista finale da inviare alla tipografia
const listaDaInviare = invitati.map((element, index) => {
    return {
        tavolo: nomeTavolo,
        nome: element,
        posto: index + 1,        
    }
});

console.log(listaDaInviare);