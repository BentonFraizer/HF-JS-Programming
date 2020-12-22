var location1 = 3;
var location1 = 4;
var location1 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Готовься, заряжай, пли! (Введите число от 0 до 6):");
  if (guess == 3) {
    isSunk = true;
  }
}