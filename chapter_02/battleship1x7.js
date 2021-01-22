var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;          // переменная для номера текущей попытки
var hits = 0;       // переменная для подсчета количества попаданий 
var guesses = 0;    // переменная для подсчета количества попыток

var isSunk = false; // переменная для хранения информации о том, потоплен корабль или нет

while (isSunk == false) {
  guess = prompt("Готовься, заряжай, пли! (Введите число от 0 до 6):");
  if (guess < 0 || guess > 6) {
    alert("Пожалуйста, введите число от 0 до 6");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("Попал!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("Красава, ты потопил корабль!");
      }
    } else {
      alert("Промазал!");
    }
  }
}
var stats = "Ты сделал " + guesses + " попытки(-ок) чтобы потопить корабль, " + "это означает, что процент попадания составил " + (3 / guesses * 100) + "%.";
alert(stats);