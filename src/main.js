const gameArea = document.querySelector('.game-area');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
let score = 0;
let level = 1;
let monsterInterval = 1200; // Initial interval

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
    monster.classList.add('killed');
    score++;
    scoreDisplay.textContent = score;

    if (score % 10 === 0) {
        levelUp();
    }

    setTimeout(() => {
        monster.remove();
    }, 200);
}

function levelUp() {
    level++;
    levelDisplay.textContent = level;
    monsterInterval = Math.max(500, monsterInterval - 100); // Increase speed, but not too fast
    clearInterval(monsterSpawner); // Clear old interval
    monsterSpawner = setInterval(createMonster, monsterInterval); // Set new interval
}

let monsterSpawner = setInterval(createMonster, monsterInterval);
