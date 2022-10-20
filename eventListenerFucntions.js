// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
//increaseWidth() that changes the .width of itemOne to any size greater than '400px'.
function increaseWidth() {
itemOne.style.width = '450px';
}
itemOne.addEventListener('mouseover', increaseWidth);
//create a function called changeBackground() that changes the .backgroundColor of itemTwo.
function changeBackground() {
  itemTwo.style.backgroundColor = 'yellow';
}
itemTwo.addEventListener('mouseup', changeBackground);
//create a function called changeText() that changes the text of itemThree to 'The mouse has left the element'.
// mouse releas function
function changeText() {
  itemThree.innerHTML = 'The mouse has left the element'
 }
 itemThree.addEventListener('mouseout', changeText);
//function bring hidden item out
function showItem() {
  itemFive.style.display = 'block';
}
itemFour.addEventListener('mousedown', showItem);

//ball game 
let ball = document.getElementById('float-circle');

// Write your code below
function up(){
  ball.style.bottom = '500px';
}
function down(){
  ball.style.bottom = '50px';
}
document.addEventListener('keydown', up);
document.addEventListener('keyup', down);  

