const choiceAreaDisplay = document.getElementById('choiceArea')
const wordAreaDisplay = document.getElementById('wordArea')
const sentencesAreaDisplay = document.getElementById('sentenceArea')
let choiceButton = document.getElementById('choiceButton')
let playerChoice //récupérer liste de mots ou phrases
let choiceType //récupérer le mot "word" ou "sentence" pour cibler des éléments
let query //récupérer le label où écrire le mot ou la phrase


//Valider Mots ou Phrases (playerChoice)
function validerChoixTypeJeu() {
    const wordsRadio = document.getElementById('words')
    const sentencesRadio = document.getElementById('sentences')
    const wordArea = document.getElementById("wordArea")
    const sentenceArea = document.getElementById("sentenceArea")

    if (wordsRadio.checked) {
        playerChoice = listeMots //identifier la liste à récup (mots ou phrases)
        choiceType = "word"
        query = document.getElementById("word")

        setTimeout(function() {choiceAreaDisplay.style.display = 'none';}, 150)
        setTimeout(function() {
            wordArea.style.display = 'block';
            document.getElementById("wordToWrite").focus()
            game()
        }, 150)
    } else if (sentencesRadio.checked) {
        playerChoice = listePhrases //identifier la liste à récup (mots ou phrases)
        choiceType = "sentence"
        query = document.getElementById("sentence")

        setTimeout(function() {choiceAreaDisplay.style.display = 'none';}, 150)
        setTimeout(function() {
            sentenceArea.style.display = 'block';
            document.getElementById("sentenceToWrite").focus()
            game()
        }, 150)
    }
}

choiceButton.addEventListener('click', validerChoixTypeJeu)


//Feedback positif 
function goodAnswer() {
    let feedback = document.getElementsByClassName("feedbackArea")[0]

    feedback.textContent = "Bravo l'intello ! Surveille bien ton goûter à la récré !"
    feedback.style.display = 'block'

    setTimeout (function() {feedback.style.display = 'none'}, 2000)
}

function badAnswer() {
    let feedback = document.getElementsByClassName("feedbackArea")[0]

    feedback.textContent = "Omg illetrer ! Faudrait faire autre chose de ta vie que les MEUPORG !"
    feedback.style.display = 'block'

    setTimeout (function() {feedback.style.display = 'none'}, 2000)
}

