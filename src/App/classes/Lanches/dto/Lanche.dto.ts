import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";


export class LancheDto{



    @ApiProperty()
    @IsNotEmpty({ message: "Data de Liberação não pode ser vazia" })
    @IsDateString()
    dataLiberacao: string;

    @ApiProperty()
    @IsNotEmpty({message : "Aluno não pode estar vazio"})
    @IsInt({ message: "Aluno não é um id válido" })
    @Type(() => Number) 
    alunoId : number;

    @ApiProperty()
    @IsNotEmpty({ message: "Status de Entregue não pode ser vazio" })
    entregue : boolean = false;



}