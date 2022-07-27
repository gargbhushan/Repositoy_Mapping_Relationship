import { CreateQuestionDto } from "./dto/createQuestion.dto";
import { QuestionRepository } from "./question.repository";
import { Quiz } from "./quiz.entity";
export declare class QuestionService {
    private questionRepository;
    constructor(questionRepository: QuestionRepository);
    createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<any>;
}
