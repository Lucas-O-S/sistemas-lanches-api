import { AllowNull, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { AlunoModel } from "./Aluno.Model";


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
        type: DataType.DATEONLY,
        allowNull: false
    })
    dataLiberacao: string;

    @ForeignKey(() => AlunoModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    alunoId : number;




}