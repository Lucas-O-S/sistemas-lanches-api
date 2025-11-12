import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { AlunoModel } from "./Aluno.Model";
import { Type } from "class-transformer";


@Table({
    tableName: "tb_lanche",
    timestamps: false
})
export class LancheModel extends Model<LancheModel>{

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        unique:true
    })
    id : number;

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    dataLiberacao: string;

    @ForeignKey(() => AlunoModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    alunoId : number;


    @BelongsTo(() => AlunoModel)
    aluno : AlunoModel;


    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    entregue : boolean;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantidade: number;


}