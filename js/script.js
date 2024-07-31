// #: Fase raccolta dati
// Chiediamo i dati all'utente
const km = prompt('Quanti chilometri vuoi percorrere?', '100');
console.log('Chilometri:', km);

const age = prompt("Qual è l'età del passeggero?", '30');
console.log('Età:', age);

// #: Fase di elaborazione
// Calcola il prezzo del biglietto senza sconto
const prezzoPerKm = 0.21;
let prezzoTotale = km * prezzoPerKm;
const prezzoSenzaSconto = prezzoTotale.toFixed(2);
console.log('Prezzo senza sconto:', prezzoSenzaSconto);