import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { QuizRepository } from "./quiz.repository";
export declare class QuizService {
    private quizRepository;
    constructor(quizRepository: QuizRepository);
    getAllQuiz(): (string | number)[];
    getQuizById(id: number): Promise<any>;
    createNewQuiz(quiz: CreateQuizDto): any;
}
