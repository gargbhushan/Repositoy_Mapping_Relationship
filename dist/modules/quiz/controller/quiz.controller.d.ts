import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QuizService } from '../service/quiz.service';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    getAllQuiz(): (string | number)[];
    getQuizId(id: number): Promise<import("../quiz.entity").Quiz>;
    createQuiz(quizData: CreateQuizDto): Promise<CreateQuizDto & import("../quiz.entity").Quiz>;
}
