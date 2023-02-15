// Initialize canvas and context

var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

// Set initial ball and paddle positions

var ballX = canvas.width / 2;

var ballY = canvas.height / 2;

var ballRadius = 10;

var ballSpeedX = 2;

var ballSpeedY = -2;

var paddleHeight = 75;

var paddleWidth = 10;

var paddleLeftY = (canvas.height - paddleHeight) / 2;

var paddleRightY = paddleLeftY;

// Draw paddles and ball

function draw() {

  // Clear canvas

  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw left paddle

  context.fillStyle = "white";

  context.fillRect(0, paddleLeftY, paddleWidth, paddleHeight);

  // Draw right paddle

  context.fillStyle = "white";

  context.fillRect(canvas.width - paddleWidth, paddleRightY, paddleWidth, paddleHeight);

  // Draw ball

  context.beginPath();

  context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);

  context.fillStyle = "white";

  context.fill();

  context.closePath();

  // Move ball

  ballX += ballSpeedX;

  ballY += ballSpeedY;

  // Bounce ball off top and bottom of canvas

  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {

    ballSpeedY = -ballSpeedY;

  }

  // Check if ball hits left paddle

  if (ballX - ballRadius < paddleWidth && ballY > paddleLeftY && ballY < paddleLeftY + paddleHeight) {

    ballSpeedX = -ballSpeedX;

  }

  // Check if ball hits right paddle

  if (ballX + ballRadius > canvas.width - paddleWidth && ballY > paddleRightY && ballY < paddleRightY + paddleHeight) {

    ballSpeedX = -ballSpeedX;

  }

}

// Move left paddle based on touch movement

function movePaddle(event) {

  event.preventDefault();

  var touch = event.touches[0];

  var touchY = touch.clientY - canvas.offsetTop - paddleHeight / 2;

  if (touchY >= 0 && touchY <= canvas.height - paddleHeight) {

    paddleLeftY = touchY;

  }

}

// Update game every 10 milliseconds

setInterval(draw, 10);

// Listen for touch movement to move left paddle

canvas.addEventListener("touchmove", movePaddle);

