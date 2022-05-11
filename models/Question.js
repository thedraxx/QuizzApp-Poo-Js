
export class Question {
    /**
     * 
     * @param {string} text this is the question text
     * @param {string[]} choices this are the choices
     * @param {number} answer this is the correct answer
     */

    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice some text to guest
     * @returns {boolean} return true if the choice is correct
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }
}

const question = new Question();
question.correctAnswer();