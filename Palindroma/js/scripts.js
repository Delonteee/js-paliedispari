/* 
        Palidroma
    Chiedere all'utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

const parola = prompt('Inserisci una parola:');
console.log('parola', parola, typeof parola);

let parolaInversa = '';

for (let i = parola.length - 1; i >= 0; i--) {
    console.log(parola[i]);

    parolaInversa += parola[i];
}

console.log('parolaInversa', parolaInversa, typeof parolaInversa)

if (parola === parolaInversa) {
    alert('Hai inserito una parola palindroma!!')
} else {
    alert('Non hai inserito una parola palindroma..')
}