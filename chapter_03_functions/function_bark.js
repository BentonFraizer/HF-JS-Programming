// function bark(name, weight) {
//   if (weight > 20) {
//     console.log(name + " says WOOF WOOF");
//   } else {
//     console.log(name + " says woof woof");
//   }
// }
// bark("rover", 23);
// bark("spot", 13);
// bark("spike", 53);
// bark("lady", 17);
// bark("juno", 20);
// bark("scottie", -1);
// bark("dino", 0, 0);
// bark("fido", "20");
// bark("lady", 10);
// bark("bruno", 21);

//===================================================================================================
// Задание со страницы 121 "Развлечение с магнитами" (выполнил самостоятельно)
// function whatShallWear(temp) {
//   if (temp < 60) {
//     console.log("Wear a jacket");
//   } else if (temp < 70) {
//     console.log("Wear a sweater");
//   } else {
//     console.log("Wear t-shirt");
//   }
// }

// whatShallWear(50);
// whatShallWear(80);
// whatShallWear(60);
//===================================================================================================
// Просто пример кода со стр. 143
// var radius = 7;
// var area = circleArea(radius);
// console.log(area);

// function circleArea(r) {
//   var a = Math.PI * r * r;
//   return a;
// }
//====================================================================================================
// Задание "Умная машина со страницы 144". Разобраться с тем, что делает код. 
// Понял суть но не понял как в точностиработает код.
// По итогу оказалось, что машина высчитывает сколько возможных вариантов слова может получиться при перестановке букв в словах.
// т.е. если слово будет из 5 букв, то количество комбинаций будет равно 120. 
// в общем это функция для вычисления факториала. (т.е. 5! = 1 * 2 * 3 * 4 * 5)
// function clunk(times) {
//   var num = times;
//   while (num > 0) {
//     display("clunk");
//     num = num - 1;
//   }
// }

// function thingamajig(size) {
//   var facky = 1;
//   clunkCounter = 0;
//   if (size == 0) {
//     display("clank");
//   } else if (size == 1) {
//     display("thunk");
//   } else {
//     while (size > 1) {
//       facky = facky * size;
//       size = size - 1;
//     }
//     clunk(facky);
//   }
// }

// function display(output) {
//   console.log(output);
//   clunkCounter = clunkCounter + 1;
// }
// var clunkCounter = 0;
// thingamajig(2);
// console.log(clunkCounter);
//==================================================================================================
// Далее приведён фрагмент кода, когда ГП (balance) остаётся неизменной
// поскольку она замещаетмся параметром balance в момент выполнения функции.
// Также здесь показано, что код, который располагается после return никак обрабатываться не будет.
// он игнориркется программой. 
var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
  debugger
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}

var amount = steal(balance, 1250);
alert("criminal: you stole " + amount + "!");