import {Question} from '../models/Question.js'
import {data} from '../data/data.js';

export const questions = data.map(question => new Question(question.questions,question.choices,question.answer))