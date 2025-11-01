import { Injectable } from "@nestjs/common";
import { LancheRepository } from "./Lanche.Repository";
import { LancheDto } from "./dto/Lanche.dto";
import { LancheModel } from "src/App/Model/Lanche.Model";


@Injectable()
export class LancheService{

    constructor(private readonly repository : LancheRepository){}

    public async create(dto : LancheDto) : Promise<LancheModel>{
        
        if(await this.repository.existRepeatedAlunoOnDate(dto.alunoId, dto.dataLiberacao)){
            throw new Error("Lanche ja liberado para esse aluno nessa data");
        }
        
        return await this.repository.create(dto);
    }

    
    public async update(dto : LancheDto, id: number) : Promise<Boolean>{
        
        if(await this.repository.existRepeatedAlunoOnDate(dto.alunoId, dto.dataLiberacao)){
            throw new Error("Lanche ja liberado para esse aluno nessa data");
        }
        
        return await this.repository.update(dto,id);
    }

    
    public async get(id : number) : Promise<LancheModel>{
        return await this.repository.get(id);
    }

    public async getAll() : Promise<LancheDto[]>{
        return await this.repository.getAll();
    }

}
