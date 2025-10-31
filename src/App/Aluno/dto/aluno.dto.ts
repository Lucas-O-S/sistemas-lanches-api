import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AlunoDto {

    @ApiProperty()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsString({message: "Deve ser uma string"})
    nome: string;

    @ApiProperty()
    @IsNotEmpty({message: "RA não pode ser vazio"})
    @IsString({message: "Deve ser uma string"})
    ra: string;

    @ApiProperty()
    @IsNotEmpty({message: "Imagem não pode ser vazio"})
    image: Buffer;

}
