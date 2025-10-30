import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AlunoDto {

    @ApiProperty()
    @IsNotEmpty({message: "O não pode ser vazio"})
    @IsString({message: "Deve ser uma string"})
    nome: string;

    @ApiProperty()
    @IsNotEmpty({message: "O RA não pode ser vazio"})
    @IsString({message: "Deve ser uma string"})
    ra: string;

    @ApiProperty()
    image: Buffer;

}
