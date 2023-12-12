let dealerCardSpace1= document.getElementById("dealercard1")
let dealerCardSpace2= document.getElementById("dealercard2")
let dealerCardSpace3= document.getElementById("dealercard3")
let dealerCardSpace4= document.getElementById("dealercard4")
let userCardSpace1= document.getElementById("usercard1")
let userCardSpace2= document.getElementById("usercard2")
let userCardSpace3= document.getElementById("usercard3")
let userCardSpace4= document.getElementById("usercard4")
let dealerScoreElement= document.getElementById("dealerscoretext")
let userScoreElement= document.getElementById("userscoretext")
let hitButton= document.getElementById("hitbutton")
let standButton= document.getElementById("standbutton")
let resetButton= document.getElementById("resetbutton") 
let messageElement= document.getElementById("messagecontent") 
let dealerGamesWonElement= document.getElementById("dealerwon")
let userGamesWonElement= document.getElementById("userwon")

let userScore = 0;
let dealerScore = 0;
let cardDeck = [];
let userCards = [];
let dealerCards = [];
let randomIndex = [];
let randomCard = [];
let dealerWon = 0;
let userWon = 0;

let cardScoreValues = {
  '2H': 2, '3H': 3, '4H': 4, '5H': 5, '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'JH': 10, 'QH': 10, 'KH': 10, 'AH': 1,
  '2D': 2, '3D': 3, '4D': 4, '5D': 5, '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'JD': 10, 'QD': 10, 'KD': 10, 'AD': 1,
  '2C': 2, '3C': 3, '4C': 4, '5C': 5, '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'JC': 10, 'QC': 10, 'KC': 10, 'AC': 1,
  '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'JS': 10, 'QS': 10, 'KS': 10, 'AS': 1,
};

function dealerWin(){
	messageElement.innerText = "Dealer wins! Press reset to play again."
	dealerWon = dealerWon + 1
	dealerGamesWonElement.innerText = "Games won: " + dealerWon
	standButton.disabled = true;
}

function userWin(){
	messageElement.innerText = "Player wins! Press reset to play again."
	userWon = userWon + 1
	userGamesWonElement.innerText = "Games won: " + userWon
	standButton.disabled = true;
}

function tie(){
	messageElement.innerText = "It's a tie! Press reset to play again."
	dealerWon = dealerWon + 1
	userWon = userWon + 1
	dealerGamesWonElement.innerText = "Games won: " + dealerWon
	userGamesWonElement.innerText = "Games won: " + userWon
}

function drawCard(cardList){
	let randomNum = Math.floor(Math.random()*(cardList.length - 1));
	const drawnCard = cardList.splice(randomNum, 1)[0];
	return drawnCard;
}

function reset(){
	userCards=[]
	dealerCards=[]
	userScore = 0;
	dealerScore = 0;

	messageElement.innerText = "Your turn!"

	cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];
	
	let userCard1 = drawCard(cardDeck);
 	let userCard2 = drawCard(cardDeck);
 	userCards.push(userCard1)
 	userCards.push(userCard2)
 
 	let dealerCard1 = drawCard(cardDeck);
 	let dealerCard2 = drawCard(cardDeck);
	dealerCards.push(dealerCard1)
	dealerCards.push(dealerCard2)
	
	dealerCardSpace1.src = "images/back.png"
	dealerCardSpace2.src = "images/" + dealerCard2 + ".svg"
	dealerCardSpace3.src = "images/blank.svg"
	dealerCardSpace4.src = "images/blank.svg"

	userCardSpace1.src = "images/" + userCard1 + ".svg"
	userCardSpace2.src = "images/" + userCard2 + ".svg"
	userCardSpace3.src = "images/blank.svg"
	userCardSpace4.src = "images/blank.svg"
	
	dealerScore = cardScoreValues[dealerCard1] + cardScoreValues[dealerCard2];
	userScore = cardScoreValues[userCard1] + cardScoreValues[userCard2];
	
	dealerScoreElement.innerText = "Score: " + dealerScore
	userScoreElement.innerText = "Score: " + userScore
	
	hitButton.disabled = false;
	standButton.disabled = false;
}

function hit(){
	if (userCards.length == 3){
		let userCard4 = drawCard(cardDeck);
		userCards.push(userCard4)
		userCardSpace4.src = "images/" + userCard4 + ".svg"
		userScore = userScore + cardScoreValues[userCard4]
		hitButton.disabled = true;
		if (userScore > 21){
			dealerWin()
			hitButton.disabled = true;
		}
	}
	else if (userCards.length == 2){
		let userCard3 = drawCard(cardDeck);
		userCards.push(userCard3)
		userCardSpace3.src = "images/" + userCard3 + ".svg"
		userScore = userScore + cardScoreValues[userCard3]
		if (userScore > 21){
			dealerWin()
			hitButton.disabled = true;
		}
	}
	if (userScore >= 21){
		dealerWin()
		}
	userScoreElement.innerText = "Score: " + userScore
}


function stand(){
	if (dealerScore < 17){
		dealerCardSpace1.src = "images/" + dealerCards[0] + ".svg"
		let dealerCard3 = drawCard(cardDeck)
		dealerCards.push(dealerCard3)
		dealerCardSpace3.src = "images/" + dealerCard3 + ".svg"
		dealerScore = dealerScore + cardScoreValues[dealerCard3]
		if (dealerScore < 17){
			let dealerCard4 = drawCard(cardDeck)
			dealerCards.push(dealerCard4)
			dealerCardSpace4.src = "images/" + dealerCard4 + ".svg"
			dealerScore = dealerScore + cardScoreValues[dealerCard4]
		}
	} 
	standButton.disabled = true;
	hitButton.disabled = true;
	dealerScoreElement.innerText = "Score: " + dealerScore
	if (dealerScore == userScore){
		tie()
	}
	else if (dealerScore == 21){
		dealerWin()
	}
	if (dealerScore > 21){
		userWin()
	}
	else{
		let dealerDistance = 21 - dealerScore
		let userDistance = 21 - userScore
		if (dealerDistance > userDistance){
			userWin()
		}
		else if (dealerDistance < userDistance){
			dealerWin()
		}
	}
}