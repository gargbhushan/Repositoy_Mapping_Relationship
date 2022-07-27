import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Quiz } from '../quiz.entity';


@Entity("questions")
export class Question extends BaseEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:'varchar',
    })
    question: string;
    @ManyToOne(()=>Quiz,(quiz)=>quiz.question)
    quiz:Quiz
}
