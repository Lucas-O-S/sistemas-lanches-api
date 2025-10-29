import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AlunoDto {

    @ApiProperty()
    @IsNotEmpty({message: "O não pode ser vazio"})
    @IsString({message: "Deve ser uma string"})
    nome: String;

    @ApiProperty()
    @IsNotEmpty({message: "O RA não pode ser vazio"})
    @IsString({message: "Deve ser uma string"})
    rA: String;

    @ApiProperty()
    image: Buffer;

}
