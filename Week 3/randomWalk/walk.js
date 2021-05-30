// No need to change the following code
// The area object defines the div in which the balls will be created
const area = {
  element: document.getElementById('area'),
  width: 600,
  height: 400,
};

// No need to change the following code
// The initialize function creates the area div on the Html page
function initialize() {
  area.element.style.width = area.width + 'px';
  area.element.style.height = area.height + 'px';
  document.body.appendChild(area.element);
}

// No need to change the following code
// The moveTo function moves a given ball to a set x and y coordinates on the page
function moveTo(ball, x, y) {
  ball.element.style.left = x + 'px';
  ball.element.style.top = y + 'px';
}

// No need to change the following code
// The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.width) {
    ball.dx = -ball.dx;
    //Get a random RGB color
    var rgbString = generateRandomRGB();
    ball.element.style.backgroundColor='rgb(' + rgbString + ')';
  }
  if (y < 0 || y > area.height - ball.height) {
    ball.dy = -ball.dy;
    /* color code taken from https://www.geeksforgeeks.org/javascript-generate-random-hex-codes-color/
     storing all letter and digit combinations
     for html color code*/
    var letters = "0123456789ABCDEF";
    // html color code starts with #
     var color = '#';
     // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (var i = 0; i < 6; i++)
       color += letters[(Math.floor(Math.random() * 16))];
       ball.element.style.backgroundColor=color;
  }
      
  
}

// TODO: implement the create function
function create(color, dx, dy) {
  const newBall = Object.create(this);

  // TODO: Set newBall properties: dx, dy, width, height
  newBall.dx = dx;
  newBall.dy = dy;
  newBall.width = 50;
  newBall.height = 50;
  // TODO: set the newBall.element property and initialize it to a Html element "div"
  newBall.element = document.createElement('div');
  // TODO: set the backgroundColor, width and height style properties for newBall.element
  newBall.element.style.backgroundColor = color;
  newBall.element.style.width = newBall.width + 'px';
  newBall.element.style.height = newBall.height + 'px';
  // This line set the CSS class for newBall.element. No need to change this line
  newBall.element.className += ' ball';

  // TODO: set the width and height of newBall based on newBall.element
  // Hint: use the Javascript parseInt() function to convert a string value to integer
  newBall.width = parseInt(newBall.element.style.width);
  newBall.height = parseInt(newBall.element.style.height);
  // TODO: use the Javascript appendChild() function to add newBall.element to the area element
  document.getElementById("area").appendChild(newBall.element); 
  return newBall;
}

// TODO: implement the update function
function update(ball, x, y) {
  // TODO: use the moveTo() function to move the ball
  moveTo(ball, x, y);
  // TODO: use the Javascript setTimeout() method to call changeDirectionIfNecessary() and update() every 16ms
  setTimeout(function () {
      changeDirectionIfNecessary(ball,x, y);
      update(ball,x + ball.dx, y + ball.dy);
  }, 16);
}

// Generate RGB colors
function generateRandomRGB(){
    
  var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  return  r +","+g+","+b;
}

// Uncomment these lines for step 1 of the activity
// This is expected to create 3 balls within the area div

 initialize();
 const ball1 = create('blue', 4, 3);
 const ball2 = create('red', 1, 5);
 const ball3 = create('green', 2, 2);
 moveTo(ball1, 1, 1);
 moveTo(ball2, 10, 10);
 moveTo(ball3, 20, 20);

// Uncomment these lines for step 2 of the activity
// This is expected to make the 3 balls move around the area div
 update(ball1, 70, 0);
 update(ball2, 20, 200);
 update(ball3, 300, 330);

