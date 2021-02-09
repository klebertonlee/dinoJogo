const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJump = false;
let position = 0;


function handlekeyup(event){
    if(event.keyCode === 32){
        if(!isJump){
        jump();
        }
    }
}
function jump(){
   

    isJump= true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJump = false;
                }else {
                position -= 20;
                dino.style.bottom = position + pageXOffset;
                }
            }, 20);
        }else{

        position += 20;
        dino.style.bottom = position + 'px';
    }
    }, 20);
}

function createrCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randonTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px;'
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {       
        
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Fim de jogo</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createrCactus, randonTime);

}

createrCactus();
document.addEventListener('keyup', handlekeyup);
