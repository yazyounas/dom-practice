/*"Firing" Events
Event Handler Registration
You’re doing great! Now it’s time to dive into using event handler functions to create interactivity.

Using the .addEventListener() method, we can have a DOM element listen for a specific event and execute 
a block of code when the event is detected. The DOM element that listens for an event is called the 
event target and the block of code that runs when the event happens is called the event handler.

Let’s take a look at the code below:

let eventTarget = document.getElementById('targetElement');
 
eventTarget.addEventListener('click', function() {
  // this block of code will run when click event happens on eventTarget element
});
Let’s break this down!

We selected our event target from the DOM using document.getElementById('targetElement').
We used the .addEventListener() method on the eventTarget DOM element.
The .addEventListener() method takes two arguments: an event name in string format and an event handler function.
 We will learn about different values we can use as event names in a later lesson.
In this example, we used the 'click' event, which fires when the user clicks on eventTarget.
The code block in the event handler function will execute when the 'click' event is detected.
Instead of using an anonymous function as the event handler, it’s best practice to create a named event handler
 function. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

function eventHandlerFunction() {
  // this block of code will run when click event happens
}
 
eventTarget.addEventListener('click', eventHandlerFunction);
*/
let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo() {
moreInfo.style.display = 'block';
}
readMore.addEventListener('click', showInfo);


//event handler function to change text on view and return change 
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
//create a function named textChange() that changes the text in the view element to 'Hello, World!'.

function textChange() {
  view.innerHTML ='Hello, World!';
}
////create a function named textReturn() that changes the text of the view element variable back to 'View'.
function textReturn() {
  view.innerHTML = 'View';
}
//Assign textChange event hander function to onlick event
view.onclick = textChange;
//textReturn as an event handler function to a click event fired on the close variable.
close.onclick = textReturn;


//Removing Event Handlers
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  //add your code here
  //add remover Listener inside the function
button.removeEventListener('click', showFortune);
}
//add listener outside the function
button.addEventListener('click', showFortune);
//Event Object Properties
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
//share photo function that target and dsipaly with time stamp
let sharePhoto = function(event) {
event.target.style.display = 'none';
text.innerHTML= event.timeStamp;
}
share.addEventListener('click', sharePhoto);
//Event Types
// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}
//event that change random background color
function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor = randomColor;
}
//add Even handler
button.addEventListener('click', colorChange);
mysteryButton.addEventListener('wheel', colorChange);