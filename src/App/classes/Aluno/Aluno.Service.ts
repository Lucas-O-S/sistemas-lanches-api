import { Injectable } from "@nestjs/common";
import { AlunoDto } from "./dto/aluno.dto";
import { ApiResponseInterface } from "../../Interface/ApiResponseInterface";
import { AlunoRepository } from "./Aluno.Repository";
import { AlunoModel } from "src/App/Model/Aluno.Model";


@Injectable()
export class AlunoService {

    constructor( private readonly repository : AlunoRepository ){}

    async create(model : AlunoDto) : Promise<AlunoModel>{


        return await this.repository.create(model);
        
    }

    async update(model : AlunoDto, id : number) : Promise<boolean>{
        

        return await this.repository.update(model, id);
        
    }

    async get(id : number, getImage: boolean = true) : Promise<AlunoModel>{
        
        
        return (getImage) ? await this.repository.get(id) : await this.repository.getNoImage(id);
        
    }
    async getAll( getImage: boolean = false) : Promise<AlunoModel[]>{
        

        return (getImage) ? await this.repository.getAll() : await this.repository.getAllNoImage();
        
    }

    public async delete(id : number) : Promise<Boolean>{
        
        if (!(await this.repository.get(id))) throw new Error("Não existe este registro no banco");
        
        return await this.repository.delete(id);
    }

}