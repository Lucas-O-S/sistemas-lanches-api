import { Injectable } from "@nestjs/common";
import { AlunoModel } from "../Model/AlunoModel";
import { InjectModel } from "@nestjs/sequelize";
import { AlunoDto } from "./dto/aluno.dto";


@Injectable()
export class AlunoRepository {
    
    constructor( @InjectModel(AlunoModel) private readonly model  : typeof AlunoModel ){}

    async create(dto : AlunoDto) : Promise<AlunoModel | null>{
        return await this.model.create(dto);
    }

}