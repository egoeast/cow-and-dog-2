let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

init();
initBall();

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    x = canvas.width / 2;
    y = canvas.height - 30;
    dx = 2;
    dy = -2;
    ballRadius = 10;
}

function initBall(){
    x = canvas.width / 2;
    y = canvas.height - 30;
    dx = 2;
    dy = -2;
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawBall() {
    /*ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();*/
    let image = new Image(100, 100);
    image.src = 'i/mm_cow_run.gif';
    ctx.drawImage(image, dx, dy, 100, 100);
}

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.status && x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                dy = -dy;
                b.status = false;
                score++;
                if (score === maxScore) {
                    level++;
                    if (!map[level]) {
                        document.location.reload();
                    }
                    alert("YOU WIN, CONGRATULATIONS!");
                    init();
                    initBall();
                    initBricks();
                    console.log(bricks);

                }
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

 /*   if (y + dy < ballRadius) {
        dy = -dy;
    }*/
//    collisionDetection();

    x += dx;
    y += dy;

    window.requestAnimationFrame(draw);
}

draw();

window.onresize = () => {
    //canvas.width = window.innerWidth;
    //console.log(window.innerWidth);
};