
//add h1 in body by using inner html
document.body.innerHTML = '<h1>This is now the heading of the body element</h1>';

//select and Modify Elements
document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';

document.getElementById('fourth').innerHTML = 'Professor Snape';
document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';

document.getElementsByTagName('li')[0].innerHTML = 'Dobby';


//Style an element with querySelctor
document.querySelector('body').style.backgroundColor = '#201F2E';
document.querySelector('.heading').style.fontFamily = 'Roboto';

// make variable to slect parents node nor child node
let first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

first.parentNode.style.backgroundColor = 'beige'; 


//Create and Insert Elements

const newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';
document.getElementById('italy-attractions').appendChild(newAttraction);

//Remove an Element it will remove the first child of an element
let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);

//Add Click Interactivity onclick event 
let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';

}
element.onclick = turnButtonRed;