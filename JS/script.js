/* 
CREATE A "SECURE" PASSWORD BY FILLING A FEW PROMPTS.
IT MUST BE MADE BY COMBINING NAME, SURNAME AND FAV COLOR
AND THE RESULTS MUST BE THE ANSWER TO THOSE QUESTIONS
*/

//ask and register name
const name= prompt("Qual è il tuo nome?");
//console.log('il mio nome è: ' + name);

//ask and register surname
const surname= prompt("Qual è il tuo cognome?");
//console.log('il mio cognome è: ' + surname);

//ask and register fav color
const favColor= prompt("Qual è il tuo colore preferito?");
//console.log('il mio colore preferito è: ' + favColor);

//give back (in page) generated password
document.getElementById ('secure').innerHTML= `La password assegnata è: ${name}${surname}${favColor}21`;