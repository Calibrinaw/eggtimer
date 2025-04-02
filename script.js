document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const homeScreen = document.getElementById('home');
    const selectionScreen = document.getElementById('selection');
    const timerScreen = document.getElementById('timer');
    const timeDisplay = document.getElementById('timeDisplay');
    let countdown;

    startButton.addEventListener('click', () => {
        homeScreen.classList.add('hidden');
        selectionScreen.classList.remove('hidden');
    });

    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', () => {
            const time = parseInt(button.dataset.time, 10);
            if (time === 0) {
                alert("Va ranger l'œuf frérot, peut-être t'es défoncé");
                return;
            }
            selectionScreen.classList.add('hidden');
            timerScreen.classList.remove('hidden');
            startTimer(time);
        });
    });

    function startTimer(seconds) {
        clearInterval(countdown);
        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft < 0) {
                clearInterval(countdown);
                playAlarm();
                alert('Temps écoulé !');
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        timeDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    }

    function playAlarm() {
        const audio = new Audio('alarm.mp3');
        audio.play();
    }

    function createEggRain() {
        const eggRain = document.getElementById('eggRain');
        const eggImages = [
            'C:/Users/FX506/Desktop/Nouveau dossier (2)/mollet.png',
            'C:/Users/FX506/Desktop/Nouveau dossier (2)/dur.png',
            'C:/Users/FX506/Desktop/Nouveau dossier (2)/poché.png',
            'C:/Users/FX506/Desktop/Nouveau dossier (2)/Dégueulasse.png',
            'C:/Users/FX506/Desktop/Nouveau dossier (2)/Non consommable.png'
        ];
        for (let i = 0; i < 50; i++) {
            const egg = document.createElement('img');
            egg.src = eggImages[Math.floor(Math.random() * eggImages.length)];
            egg.classList.add('egg');
            egg.style.left = Math.random() * 100 + 'vw';
            egg.style.animationDuration = Math.random() * 3 + 2 + 's';
            eggRain.appendChild(egg);
        }
    }

    createEggRain();
});
