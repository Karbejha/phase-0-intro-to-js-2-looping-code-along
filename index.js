// Code your solutions in this file
const gifts = ["Guadalupe", "Ollie", "Aki"];
let messages=[...gifts] ;
function writeCards(gifts,surprise) {
  for (let i = 0; i < gifts.length; i++) {
    messages[i]=`Thank you, ${gifts[i]}, for the wonderful ${surprise} gift!`;
}

  return messages;
}

writeCards(gifts);

function countDown(number){
    let countup = number;
    while (countup >= 0) {
      console.log(countup--);
    }
}

countDown(10);