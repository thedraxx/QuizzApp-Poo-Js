export class UI {
    constructor() { }

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text
    }


    /**
     * 
     * @param {string[]} choices the choices of the quesztion
     */
    showChoices(choices, callback) {
        const choiecesContainer = document.getElementById('choices')
        choiecesContainer.innerHTML = '';
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.className = "button"
            button.innerText = choices[i]
            button.addEventListener('click', () => callback(choices[i]))
            choiecesContainer.append(button)
        }
    }

    /**
     * 
     * @param {number} score  the total score
     */
    showScores(score) {
        const quizEndHTML = `
            <h1>Results</h1>
            <h2>Your score: ${score}</h2>
        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML
    }

    /**
     * 
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total total question 
     */

    showProgress(currentIndex, total){
        const element=document.getElementById('progress')
        element.innerHTML = `Question ${currentIndex} of ${total}`

    }


}