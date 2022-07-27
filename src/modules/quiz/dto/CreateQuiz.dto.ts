import{IsNotEmpty,Length} from "class-validator"
export class CreateQuizDto{
    @IsNotEmpty({message:"the quiz have a tittle"})
    @Length(3,255)
    title :string;
    @IsNotEmpty()
    @Length(3)
    description:string;
}