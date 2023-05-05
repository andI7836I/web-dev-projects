let first = 10
let second = 111
let sum = first + second
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById("message-el")

function startGame(){
    if(sum < 21){
        message = "do u want to draw a new card?"
        isAlive = true
        r
    } else if (sum === 21){
        message = "u win"
        hasBlackJack = true
    } else {
        message = "u lose"
        isAlive = false
    }
    messageEl.textContent = message

}

