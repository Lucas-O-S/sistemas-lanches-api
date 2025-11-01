import { LancheModel } from "src/App/Model/Lanche.Model";
import { LancheDto } from "./dto/Lanche.dto";
import { InjectModel } from "@nestjs/sequelize";
import { where } from "sequelize";



export class LancheRepository{

    constructor(@InjectModel(LancheModel) private readonly model : typeof LancheModel ){}

    async create(dto : LancheDto) : Promise<LancheModel>{
        return await this.model.create(dto);
    }
    
    async update(dto : LancheDto, id : number) : Promise<Boolean>{
        
        const [affectedRows] = await this.model.update(dto, {where: {id: id} });

        return await affectedRows > 0;
    }
    
    async get(id : number) : Promise<LancheModel>{
        
        return await this.model.findByPk(id);
    }
    
    async getAll() : Promise<LancheDto[]>{
        
        return await this.model.findAll();
    }

    async existRepeatedAlunoOnDate(alunoId: number, dateLiberacao: string) : Promise<boolean>{
        return (await this.model.count({where:{
            alunoId: alunoId,
            dataLiberacao: dateLiberacao
        }})) > 0;
    }


    


}