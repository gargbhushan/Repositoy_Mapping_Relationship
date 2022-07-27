import { CreateQuestionDto } from "./dto/createQuestion.dto";
import { QuestionService } from "./question.service";
import { QuizService } from "./quiz.service";
export declare class QuestionController {
    private questionService;
    private quizService;
    constructor(questionService: QuestionService, quizService: QuizService);
    saveQuestion(question: CreateQuestionDto): Promise<{
        question: string;
    } & import("./question.entity").Question>;
}
