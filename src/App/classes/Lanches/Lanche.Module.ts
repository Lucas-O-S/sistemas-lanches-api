import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { LancheModel } from "src/App/Model/Lanche.Model";
import { LancheController } from "./Lanche.Controller";
import { LancheRepository } from "./Lanche.Repository";
import { LancheService } from "./Lanche.Service";


@Module({
    imports: [
        SequelizeModule.forFeature([LancheModel])
    ],
    controllers: [LancheController],
    providers: [LancheService, LancheRepository],
    exports: [LancheService],})
export class LancheModule {}