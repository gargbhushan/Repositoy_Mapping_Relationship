import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { QuizRepository } from "../repository/quiz.repository";
export declare class QuizService {
    private quizRepository;
    constructor(quizRepository: QuizRepository);
    getAllQuiz(): (string | number)[];
    getQuizById(id: number): Promise<import("../quiz.entity").Quiz>;
    createNewQuiz(quiz: CreateQuizDto): Promise<CreateQuizDto & import("../quiz.entity").Quiz>;
}
