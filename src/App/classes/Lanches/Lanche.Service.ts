import { Injectable } from "@nestjs/common";
import { LancheRepository } from "./Lanche.Repository";
import { LancheDto } from "./dto/Lanche.dto";
import { LancheModel } from "src/App/Model/Lanche.Model";
import { AlunoRepository } from "../Aluno/Aluno.Repository";
import { AlunoService } from "../Aluno/Aluno.Service";


@Injectable()
export class LancheService{

    constructor(
        private readonly repository : LancheRepository,
        private readonly alunoService : AlunoService 
    ){}

    public async create(dto : LancheDto) : Promise<LancheModel>{
        
        if(await this.repository.existRepeatedAlunoOnDate(dto.alunoId, dto.dataLiberacao))
            throw new Error("Lanche ja liberado para esse aluno nessa data");
        
        if (!(await this.alunoService.get(dto.alunoId))) 
            throw new Error("Não existe este aluno no registro no banco");

        
        return await this.repository.create(dto);
    }

    
    public async update(dto : LancheDto, id: number) : Promise<Boolean>{
        
        if(await this.repository.existRepeatedAlunoOnDate(dto.alunoId, dto.dataLiberacao))
            throw new Error("Lanche ja liberado para esse aluno nessa data");
        

        if (!(await this.alunoService.get(dto.alunoId))) 
            throw new Error("Não existe este aluno no registro no banco");

        
        return await this.repository.update(dto,id);
    }

    
    public async get(id : number) : Promise<LancheModel>{
        return await this.repository.get(id);
    }

    public async getAll() : Promise<LancheDto[]>{
        return await this.repository.getAll();
    }

    public async delete(id : number) : Promise<Boolean>{
        
        if (!(await this.repository.get(id))) throw new Error("Não existe este registro no banco");
        
        return await this.repository.delete(id);
    }

}
