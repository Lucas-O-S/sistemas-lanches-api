import { timestamp } from "rxjs";
import { Model } from "sequelize";
import { AllowNull, Column, DataType, Table } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

@Table({
    tableName: "tb_aluno",
    timestamps: false
})
export class Aluno extends Model<Aluno>{
    
    @Column({
        type: DataType.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        unique:true
    })
    id:number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    nome : string;

    @Column({
        type: DataType.BLOB(), 
     })
    image: Buffer;

}