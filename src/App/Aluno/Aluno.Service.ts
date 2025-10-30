import { Injectable } from "@nestjs/common";
import { AlunoDto } from "./dto/aluno.dto";
import { ApiResponseInterface } from "../Interface/ApiResponseInterface";
import { AlunoRepository } from "./Aluno.Repository";


@Injectable()
export class AlunoService {

    constructor( private readonly repository : AlunoRepository ){}

    async create(model : AlunoDto) : Promise<AlunoDto>{


        return await this.repository.create(model);
        
    }

    async update(model : AlunoDto, id : number) : Promise<boolean>{
        

        return await this.repository.update(model, id);
        
    }

}