let score = 0;
let index = 0;
let startTime
let elapsedTime

function game() {
    let btnId = choiceType + "Button"; // cibler le bouton Words ou Sentence
    let button = document.getElementById(btnId);

    let askedItem = playerChoice[index]; // Initialiser le mot ou phrase 0
    query.textContent = askedItem;

    startTimer();

    button.addEventListener('click', next); // Btn
    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            next();
        }
    });
}

function checkItem() {
    let textArea = document.getElementById(choiceType + "ToWrite");

    if (index >= playerChoice.length) {
        return; // Ne rien faire si l'index est hors limite
    }

    if (textArea.value === playerChoice[index]) {
        score++;

    }
    index++;
    textArea.value = "";
    nextItem();
}

function nextItem() {
    if (index < playerChoice.length) {
        askedItem = playerChoice[index];
        query.textContent = askedItem;
    } else {
        stopTimer()
        let area = document.getElementById(choiceType + "Area");
        let scoreArea = document.getElementById("scoreArea");

        area.style.display = "none";
        scoreArea.style.display = "flex";
        retournerMessageScore(score);
    }
}

function next() {
    checkItem();
    console.log(index, playerChoice);
}

// message score final 
function retournerMessageScore() {
    let scoreFeedback = document.getElementById('scoreText');
    scoreFeedback.textContent = 'Ton score est de ' + score + ' sur ' + playerChoice.length + ' en '+elapsedTime+' secondes !';
}

//chrono 
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000); // Met à jour le chronomètre chaque seconde
}

function updateTimer() {
    let currentTime = Date.now();
    elapsedTime = Math.floor((currentTime - startTime) / 1000); // Temps écoulé en secondes
}

function stopTimer() {
    clearInterval(timerInterval);
}