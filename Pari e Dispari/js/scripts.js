/* 
        Pari e Dispari
    L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

let parola = prompt('Pari o dispari? (P o D)');
console.log('parola', parola, typeof parola);

const numeroUser = parseInt(prompt('Inserisci un numero da 1 a 5:'));
console.log('numeroUser', numeroUser, typeof numeroUser);

const numeroPc = Math.floor(Math.random() * (4) + 1);
console.log('numeroPc', numeroPc, typeof numeroPc);

const somma = numeroUser + numeroPc;
console.log('somma', somma, typeof somma);

let pari;

if (somma % 2 == 0) {
    console.log(somma, 'somma è PARI');
    pari = true;
    console.log('pari', pari, typeof pari);
} else {
    console.log(somma, 'somma è DISPARI');
    pari = false;
    console.log('pari', pari, typeof pari);
}

if (pari && parola == 'P'){
    alert('Hai VINTO!!');
} else if (!pari && parola == 'D'){
    alert('Hai VINTO!!');
} else {
    alert('Hai PERSO..');
}