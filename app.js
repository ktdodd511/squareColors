var boxes = document.getElementsByClassName('box');
var selectedBoxes = [];
var counter = 0;
var randomBox;



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function colorRandomBox() {

  if (counter >= 8) {
    selectedBoxes.shift();
  }

  do {
    getRandomBox();
  } while (selectedBoxes.indexOf(randomBox) != -1);

  boxes[randomBox].style.backgroundColor = getRandomColor();
  selectedBoxes.push(randomBox);
  counter++;
  }


function getRandomBox() {
  randomBox = Math.floor(Math.random()*boxes.length);
}


setInterval(colorRandomBox, 250);
