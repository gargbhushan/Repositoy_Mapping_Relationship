import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { Quiz } from "../quiz.entity";
import { QuestionRepository } from "../repository/question.repository";


@Injectable()
export class QuestionService{
    constructor(@InjectRepository(QuestionRepository)private questionRepository:QuestionRepository){}
    async createQuestion(question:CreateQuestionDto,quiz:Quiz){
        const newQuestion = await this.questionRepository.save({question:question.question});
        quiz.question =[...quiz.question,newQuestion];
        await quiz.save()
        return newQuestion;
    }
    }