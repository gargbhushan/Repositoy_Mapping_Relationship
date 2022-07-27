import { EntityRepository, Repository } from "typeorm";
import { Question } from "../enitity/question.entity";

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question>{}