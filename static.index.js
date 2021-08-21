POST /sit
Request
{
"balance": int
}
Response
{
"sessionId": guid
"availableBetOptions": array_of_int
}
 
POST /deal
Request
{
"bet": int,
"sessionId": guid
}
Response
{
"dealerCards": array_of_cards, // see cards structure below
"playerCards": array_of_cards, // see cards structure below
"roundEnded": bool,
"winAmount": int,
“currentBalance”: int
}
 
POST /turn
Request
{
"action": string,
"sessionId": guid
}
Response
{
"playerCard": card, // null if it is a “stay” action
"dealerCards": array_of_cards, // see cards structure below
"roundEnded": bool,
"winAmount": int,
“currentBalance”: int
}

POST /stand
Request
{
"sessionId": guid
}
Response
{
"roundsPlayed": int,
"winAmount": int
}
 
The cards' structure is as follows:
{
"rank": string,
"suite": string
}
