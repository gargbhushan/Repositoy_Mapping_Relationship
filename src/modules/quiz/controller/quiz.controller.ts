import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QuizService } from '../service/quiz.service';


@Controller('quiz')
export class QuizController {
    constructor (private quizService:QuizService){}
    @Get("/")
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }
    @Get('/:id')
    async getQuizId(@Param("id",ParseIntPipe)id:number){
        return await this.quizService.getQuizById(id);
    }
    @Post("/create")
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    async createQuiz(@Body() quizData:CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }

    }