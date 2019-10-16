var userName = prompt('Inserisci il tuo nome'); //Nome utente
var userSurname = prompt('Inserisci il tuo cognome'); //Cognome
var favColor = prompt("Qual'è il tuo colore preferito?"); //Colore preferito

//scrive messaggio benvenuto con nome e cognome utente
var userTitle = document.getElementById('title-psw');
userTitle.innerHTML = 'Benvenuto ' + userName + ' ' + userSurname + ' la tua password temporanea è:';
//scrive sulla pagina password non sicura
document.getElementById('unsecure-psw').innerHTML = userName + userSurname + favColor + '19';
