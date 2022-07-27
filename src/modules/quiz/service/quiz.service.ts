import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { QuizRepository } from "../repository/quiz.repository";

@Injectable()
export class QuizService{
    constructor(@InjectRepository(QuizRepository) private quizRepository:QuizRepository){}
     getAllQuiz(){
        return [1,2,3,4,5,"hello everyone"]
    }
    async getQuizById(id:number){
        return await this.quizRepository.findOne(id,{relations:['question']});
    }
    createNewQuiz(quiz:CreateQuizDto){
        return  this.quizRepository.save(quiz)
    }
}