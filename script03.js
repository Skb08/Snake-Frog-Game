
score =0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e){
    console.log("key code is: ",e.keyCode);
    if(e.keyCode == 38){
        // console.log("suraj");
        frog = document.querySelector('.frog');
        frog.classList.add('animateFrog');
        setTimeout(() => {
            frog.classList.remove('animateFrog');
        },700);
    }

    if(e.keyCode == 39){
        frog = document.querySelector('.frog');
        frogX = parseInt(window.getComputedStyle(frog,null).getPropertyValue('left'));
        frog.style.left = frogX + 112+"px";
    }

    if(e.keyCode == 37){
        frog = document.querySelector('.frog');
        frogX = parseInt(window.getComputedStyle(frog,null).getPropertyValue('left'));
        frog.style.left = (frogX - 112)+"px";
    }
}

setInterval(() => {
    frog = document.querySelector('.frog');
    gameOver = document.querySelector('.gameOver');
    snake = document.querySelector('.snake');

    fx = parseInt(window.getComputedStyle(frog,null).getPropertyValue('left'));
    fy = parseInt(window.getComputedStyle(frog,null).getPropertyValue('top'));

    sx = parseInt(window.getComputedStyle(snake,null).getPropertyValue('left'));
    sy = parseInt(window.getComputedStyle(snake,null).getPropertyValue('top'));

    offsetX = Math.abs(fx-sx);
    offsetY = Math.abs(fy-sy);
    // console.log(offsetX,offsetY);

    if(offsetX<105 && offsetY<52){
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        snake.classList.remove('snakeAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }else if(offsetX<150 && cross){
        score += 100;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },900);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(snake,null).getPropertyValue('animation-duration'));
            newDur = aniDur-0.1;
            snake.style.animationDuration = newDur + 's';
        },500);
    }

},10);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: "+score;
}