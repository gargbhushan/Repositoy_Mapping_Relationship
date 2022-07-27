import { BaseEntity } from "typeorm";
import { Question } from "./enitity/question.entity";
export declare class Quiz extends BaseEntity {
    id: number;
    title: string;
    description: string;
    isActive: boolean;
    question: Question[];
}
