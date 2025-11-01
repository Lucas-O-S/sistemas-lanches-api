import { Injectable } from "@nestjs/common";
import { AlunoModel } from "../Model/AlunoModel";
import { InjectModel } from "@nestjs/sequelize";
import { AlunoDto } from "./dto/aluno.dto";
import { where } from "sequelize";


@Injectable()
export class AlunoRepository {
    
    constructor( @InjectModel(AlunoModel) private readonly model  : typeof AlunoModel ){}

    async create(dto : AlunoDto) : Promise<AlunoModel>{
        return this.model.create(dto);
    }

    async update(dto : AlunoDto, id : number) : Promise<boolean>{
        
        const [affectedRows] = await this.model.update(dto, {where: {id: id} });
        return affectedRows > 0;
    }
    
    async get(id : number) : Promise<AlunoDto>{
        return this.model.findByPk(id);
    }
    
    async getAllNoImage() : Promise<AlunoDto[]>{
        return this.model.findAll({attributes : {exclude: ['imagem']}} );
    }

    async getAll() : Promise<AlunoDto[]>{
        return this.model.findAll();
    }

    async getNoImage(id : number) {
        return this.model.findByPk(id, { attributes: { exclude: ['imagem'] } });
    }

    

}