// #: Fase raccolta dati
// Chiediamo i dati all'utente
const km = prompt('Quanti chilometri vuoi percorrere?', '100');
console.log('Chilometri:', km);

const age = prompt("Qual è l'età del passeggero?", '30');
console.log('Età:', age);

// #: Fase di elaborazione
// Calcola il prezzo del biglietto senza sconto
const pricePerKm = 0.21;
let totalPrice = km * pricePerKm;
const priceNoDiscount = totalPrice.toFixed(2); //fissaggio a due decimali
console.log('Prezzo senza sconto:', priceNoDiscount);

// Applica lo sconto in base all'età
if (age < 18) {
  // Sconto del 20% per i minorenni
  totalPrice *= 0.8;
} else if (age > 65) {
  // Sconto del 40% per gli over 65
  totalPrice *= 0.6;
}

// Format il prezzo a due decimali
const finalPrice = totalPrice.toFixed(2);
console.log('Prezzo finale:', finalPrice);

// #: Fase di Output
// Mostra il risultato sulla pagina
document.getElementById('km').textContent = km;
document.getElementById('age').textContent = age;
document.getElementById('priceNoDiscount').textContent = priceNoDiscount;
document.getElementById('finalPrice').textContent = finalPrice;