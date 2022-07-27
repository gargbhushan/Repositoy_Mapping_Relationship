import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { QuestionService } from "../service/question.service";
import { QuizService } from "../service/quiz.service";

@Controller("question")
export class QuestionController{
    constructor(private questionService:QuestionService,private quizService:QuizService){}
    
    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question:CreateQuestionDto){
        const quiz = await this.quizService.getQuizById(question.quizId)
        return await this.questionService.createQuestion(question,quiz);

    }
}