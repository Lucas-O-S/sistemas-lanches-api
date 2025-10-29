import { IsNotEmpty } from "class-validator";

export class AlunoDto {


    @IsNotEmpty()
    nome: String;

}
