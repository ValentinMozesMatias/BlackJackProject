// const { default: axios } = require("axios");

// Creating a link between buttons
const BlackJackEl = document.querySelector('.BlackJack');
const btnTurn = document.querySelector('.btn--Turn');
const btnRoll = document.querySelector('.btn--roll');
const btnSit = document.querySelector('.btn--sit');
const btnStand = document.querySelector('.btn--stand');

// CORS
const express = require("express")
const app = express()
const cors = require("cors")
// Routes
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
}))

//Starting condititons
let scores, currentScore, activePlayer, playing;
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const arrayOfCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();
    let text = "";

    //Creating a deck of cards
    function cardDeck()
    {
        var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < arrayOfCards.length; x++)
		{
			var card = {Value: arrayOfCards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
    }

//Implementing post with axios
btnSit.addEventListener('click', function(){
    axios.post('https://blackjack.fuzz.me.uk/sit', {
        "balance": "text"
    })
    .then(function (response) {
                resultElement.innerHTML = generateHTML(response);
              }).catch(error => console.log(error)) 
    })

    // Players money
    function getRandomMoney(min, max) {
        min = Math.ceil(10);
        max = Math.floor(1000);
        return Math.floor(Math.random() * (max - min) + min);  
    }
    
