/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 25;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)
let brush = document.querySelector('.current-brush')

let palette = document.querySelectorAll('.palette div')

let canvasSquares = document.querySelectorAll('.canvas div')

let app = document.querySelector('.app')

let isMouseDown = false

/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

//brush listener
brush.addEventListener('click', function(){
  // console.log('brush!')
})

//changes brush color
for(let i = 0; i < palette.length; i++){
  palette[i].addEventListener('click', function(){
    // console.log(palette[i].classList);
    //brush.classList.replace(current color to change, newColor)
    brush.classList.replace(brush.classList[1], palette[i].classList[1])
  })
}

//changes canvas squares to brush color
// for(let i = 0; i < canvasSquares.length; i++){
//   canvasSquares[i].addEventListener('click', function(){
//     canvasSquares[i].classList.replace(canvasSquares[i].classList[1], brush.classList[1])
//   })
// }


//Some Not-Quite-Stretch-Goal Next Steps

//changes to mouseenter
for(let i = 0; i < canvasSquares.length; i++){
  canvasSquares[i].addEventListener('mouseover', function(){
    if(isMouseDown === true){
    canvasSquares[i].classList.replace(canvasSquares[i].classList[1], brush.classList[1])
  }})
}

//mousedown - checks if user left clicks and holds
//mouseup - checks for when user releases that left click

//eventListener for mouseup
app.addEventListener('mousedown', function(){
  console.log('Mouse is down');
  isMouseDown = true;
  console.log('isMouseDown:' + isMouseDown);
})

app.addEventListener('mouseup', function(){
  console.log('Mouse is up');
  isMouseDown = false;
  console.log('isMouseDown:' + isMouseDown);
})




/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
