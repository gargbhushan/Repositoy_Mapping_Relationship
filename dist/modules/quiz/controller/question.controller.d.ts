import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { QuestionService } from "../service/question.service";
import { QuizService } from "../service/quiz.service";
export declare class QuestionController {
    private questionService;
    private quizService;
    constructor(questionService: QuestionService, quizService: QuizService);
    saveQuestion(question: CreateQuestionDto): Promise<{
        question: string;
    } & import("../enitity/question.entity").Question>;
}
