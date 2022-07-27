
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity("Quiz")
export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment:"this quiz unique Idenifier"
    })
    id : number;
    @Column({
        type:"varchar"
    })
    title:string;
    @Column({
        type:"text"
    })
    description:string;
    @Column({type:"boolean",default:1})
    isActive:boolean
    @OneToMany(()=>Question,(question)=>question.quiz)
    question:Question[];

}