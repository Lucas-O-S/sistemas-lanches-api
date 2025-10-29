import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AlunoController } from "./Aluno.Controller";
import { AlunoService } from "./Aluno.Service";
import { AlunoRepository } from "./AlunoRepository";
import { AlunoModel } from "../Model/AlunoModel";



@Module({
    imports: [
        SequelizeModule.forFeature([AlunoModel])
    ],
    controllers: [AlunoController],
    providers: [AlunoService, AlunoRepository],
    exports: [AlunoService],
})
export class AlunoModule {}