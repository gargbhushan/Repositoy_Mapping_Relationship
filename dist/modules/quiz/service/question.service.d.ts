import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { Quiz } from "../quiz.entity";
import { QuestionRepository } from "../repository/question.repository";
export declare class QuestionService {
    private questionRepository;
    constructor(questionRepository: QuestionRepository);
    createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<{
        question: string;
    } & import("../enitity/question.entity").Question>;
}
