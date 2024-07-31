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
const prezzoSenzaSconto = prezzoTotale.toFixed(2); //fissaggio a due decimali
console.log('Prezzo senza sconto:', prezzoSenzaSconto);

// Applica lo sconto in base all'età
if (age < 18) {
  // Sconto del 20% per i minorenni
  prezzoTotale *= 0.8;
} else if (age > 65) {
  // Sconto del 40% per gli over 65
  prezzoTotale *= 0.6;
}

// Format il prezzo a due decimali
const prezzoFinale = prezzoTotale.toFixed(2);
console.log('Prezzo finale:', prezzoFinale);

// #: Fase di Output
// Mostra il risultato sulla pagina
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `
      <p>Chilometri: ${km}</p>
      <p>Età: ${age}</p>
      <p>Prezzo senza sconto: €${prezzoSenzaSconto}</p>
      <p>Prezzo finale: €${prezzoFinale}</p>
    `;