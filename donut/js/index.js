
const canvas = document.getElementById('donutCanvas');
const ctx = canvas.getContext('2d');

let angle = 0;

function drawDonut() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = 100;
    const innerRadius = 50;
    const donutThickness = outerRadius - innerRadius;

    // Move donut in a circular path
    const pathRadius = 150;
    const pathX = centerX + pathRadius * Math.cos(angle);
    const pathY = centerY + pathRadius * Math.sin(angle);

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(pathX, pathY, outerRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Drawing inner circle to create the donut hole
    ctx.beginPath();
    ctx.arc(pathX, pathY, innerRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    angle += 0.01;
    requestAnimationFrame(drawDonut);
}

drawDonut();
