const questionKm = Number (prompt('Quanti chilometri ha bisogno di percorerre?'))
console.log(questionKm);

const questionAge = Number (prompt ('Scrivere la propria età in numeri [ es 30]'))
console.log(questionAge);

let standardPrice = questionKm * 0.21;


if (questionAge < 18){
    let discount20 = standardPrice * 20 / 100;
} else if (questionAge > 65) {
    let discount40 = standardPrice * 40 / 100;
}