import { Question } from "../models/Question";
import { data } from "./data";

export const questions = data.map(question => new Question(question.questions,question.choices,question.answer))