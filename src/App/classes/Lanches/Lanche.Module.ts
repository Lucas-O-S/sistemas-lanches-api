import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { LancheModel } from "src/App/Model/Lanche.Model";
import { LancheController } from "./Lanche.Controller";
import { LancheRepository } from "./Lanche.Repository";
import { LancheService } from "./Lanche.Service";
import { AlunoModule } from "../Aluno/Aluno.Module";


@Module({
    imports: [
        SequelizeModule.forFeature([LancheModel]),
        forwardRef(() => AlunoModule)
    ],
    controllers: [LancheController],
    providers: [LancheService, LancheRepository],
    exports: [LancheService],})
export class LancheModule {}