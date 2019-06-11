console.log("Up and running!"); 

cards = ["king", "king", "queen", "queen"]; 
cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId) {
checkForMatch(); 

console.log("user flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
}
flipCard(0); 
flipCard(2); 
flipCard(2); 