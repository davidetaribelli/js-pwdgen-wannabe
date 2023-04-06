// chiedere all'utente info su di lui
let nome = prompt("Qual è il tuo nome?")
let cognome = prompt("Qual è il tuo cognome?")
let colorePreferito = prompt("Qual è il tuo colore prefrito?")


// password generata
let passwordGenerata = (`${nome}-${cognome}-${colorePreferito}-2023`);

//svorascrivere
document.getElementById('psw').innerText = passwordGenerata