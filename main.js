const questionKm = Number (prompt('Quanti chilometri ha bisogno di percorerre?'))
console.log(questionKm);

const questionAge = Number (prompt ('Scrivere la propria età in numeri [ es 30]'))
console.log(questionAge);

const standardPrice = questionKm * 0.21;
const discount20 = standardPrice * 20 / 100;
const discount40 = standardPrice * 40 / 100;


if (questionAge < 18){
    alert ('Il costo del tuo biglietto è €`${discount20` ')
}