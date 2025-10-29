import { Injectable } from "@nestjs/common";
import { AlunoDto } from "./dto/aluno.dto";
import { ApiResponseInterface } from "../Interface/ApiResponseInterface";
import { AlunoRepository } from "./AlunoRepository";


@Injectable()
export class AlunoService {

    constructor( private readonly repository : AlunoRepository ){}

    async create(model : AlunoDto) : Promise<ApiResponseInterface<AlunoDto>>{


        return this.repository.create(model);
        
    }

}