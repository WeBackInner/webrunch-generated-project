const gameArea = document.querySelector('.game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createMonster() {
    const monster = document.createElement('div');
    monster.classList.add('monster');
    monster.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
    monster.style.top = Math.random() * (gameArea.offsetHeight - 50) + 'px';

    monster.addEventListener('click', killMonster);
    gameArea.appendChild(monster);
}

function killMonster(event) {
    const monster = event.target;
    monster.classList.add('killed'); // Add 'killed' class for visual feedback
    score++;
    scoreDisplay.textContent = score;

    setTimeout(() => {
        monster.remove(); // Remove monster after animation
    }, 200); // Delay to match the transition duration
}

setInterval(createMonster, 1200); // Slightly faster monster creation
