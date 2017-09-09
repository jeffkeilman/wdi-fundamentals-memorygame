var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var cardsInPlay = [];

var wins = 0;
var losses = 0;

var checkForMatch = function(card) {
	// flip the card
	card.setAttribute('src', cards[card.getAttribute('data-id')].cardImage);

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
			/*wins++;
			displayScore();*/
		} else {
			alert('Sorry, try again.');
			/*losses++;
			displayScore();*/
		}
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);

	checkForMatch(this);
}

var createBoard = function() {
	for (var x = 0; x < cards.length; x++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', x);
		cardElement.setAttribute('alt', cards[x].rank + ' of ' + cards[x].suit);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	document.getElementById('btn').addEventListener('click', resetGame);
	//displayScore();
}

var resetGame = function() {
	cardsInPlay.length = 0;
	var gameBoard = document.getElementById('game-board');
	// destory old board
	while (gameBoard.hasChildNodes()) {
		gameBoard.removeChild(gameBoard.lastChild);
	}
	createBoard();
}

/*var displayScore = function() {
	var scoreBoard = document.getElementById('score');
	scoreBoard.removeChild(scoreBoard.lastChild);
	var scoreTable = document.createElement('table');
	scoreTable.innerHTML = '<tr><th>Wins</th><th>Losses</th></tr><tr><td>' + wins + 
	'</td><td>' + losses + '</td></tr>';
	scoreTable.style.alignSelf = 'center';
	scoreBoard.appendChild(scoreTable);
}*/

createBoard();