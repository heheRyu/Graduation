const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numStars = 600; // 별의 개수
const stars = [];

class Star{
    constructor(x, y, radius, speed){
        this.x = x;
        this.y = y;
        this.radius = radius * 2;
        this.speed = Math.random() * 0.005 + 0.002;
        this.angle = Math.random() * Math.PI * 2;
        this.trail = [];
    }

    update(){
        this.angle += this.speed;
        if (this.angle >= Math.PI * 2) this.angle = 0;

        this.x = canvas.width / 2 + Math.cos(this.angle) * this.radius;
        this.y = 0 + Math.sin(this.angle) * this.radius;

        this.trail.push({ x: this.x, y: this.y });

        if (this.trail.length > 300){
            this.trail.shift();
        }
    }

    draw(){
        ctx.beginPath();
        for (let i = 0; i < this.trail.length; i++){
            const point = this.trail[i];
            const opacity = 1 - (i / this.trail.length) * 0.8;

            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 2.5;

            if(i === 0){
                ctx.moveTo(point.x, point.y);
            }else{
                ctx.lineTo(point.x, point.y);
            }
        }
        ctx.stroke();
    }
}

// 별을 초기화하는 함수
function initStars(){
    stars.length = 0;

    for(let i = 0; i < numStars; i++){
        const radius = Math.random() * (Math.min(canvas.width, canvas.height) / 2);
        const speed = Math.random() * 0.005 + 0.002; // 속도
        stars.push(new Star(canvas.width / 2, 0, radius, speed));
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(const star of stars){
        star.update();
        star.draw();
    }

    requestAnimationFrame(animate);
}

// 리사이즈
window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initStars();
});

initStars();
animate();
