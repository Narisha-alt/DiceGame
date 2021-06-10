// Dice 1

let randomNum1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png")

// Dice 2

let randomNum2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png")


if (randomNum1 > randomNum2) {
  document.querySelector('.RefreshMe').innerHTML = '🏁Player 1 Wins'
} else if (randomNum1 == randomNum2) {
  document.querySelector('.RefreshMe').innerHTML = 'Draw!!!'
} else {
  document.querySelector('.RefreshMe').innerHTML = 'Player 2 Wins🏁'
}
