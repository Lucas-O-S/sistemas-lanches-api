import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "tb_aluno",
    timestamps: false
})
export class AlunoModel extends Model<AlunoModel>{
    
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
        allowNull: false,
        unique: true,
    })
    ra : string;


    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    nome : string;

    @Column({
        type: DataType.BLOB, 
        allowNull: false

     })
    imagem: Buffer;

}