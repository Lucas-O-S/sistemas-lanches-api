import { Body, Controller, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AlunoService } from "./Aluno.Service";
import { AlunoDto } from "./dto/aluno.dto";
import { ApiResponseInterface } from "../Interface/ApiResponseInterface";
import { Result } from "tedious/lib/token/helpers";
import { FileInterceptor } from "@nestjs/platform-express";
import { AlunoSchema } from "./Schemas/AlunoSchema";


@Controller("aluno")
@ApiTags("Aluno")
export class AlunoController {

    constructor(private readonly service: AlunoService) {}

    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody(AlunoSchema)
    @ApiResponse({status: 201, description: "Aluno criado com sucesso"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    @UseInterceptors(FileInterceptor('imagem'))
    async create(@Body() dto: AlunoDto, @UploadedFile() file: Express.Multer.File) : Promise<ApiResponseInterface> {
        try{

            if (file) dto.image = file.buffer;
            
            const result = await this.service.create(dto);

            return {
                status: 201,
                message: 'Usuário registrado com sucesso.',
                dataUnit: result,
            } ;
        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao registrar usuário.',
                error: error.message || error,
            }

        }
    }

    @Put(":Id")
    @ApiConsumes('multipart/form-data')
    @ApiBody(AlunoSchema)
    @ApiResponse({status: 201, description: "Aluno criado com sucesso"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    @UseInterceptors(FileInterceptor('imagem'))
    async update(@Param("Id", ParseIntPipe) id : number, @Body() dto: AlunoDto, @UploadedFile() file: Express.Multer.File) : Promise<ApiResponseInterface> {
        try{
            console.log(dto);

            dto.image = file ? file.buffer : null;

            const result = await this.service.create(dto);

            return {
                status: 201,
                message: 'Usuário registrado com sucesso.',
                dataUnit: result,
            } ;
        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao registrar usuário.',
                error: error.message || error,
            }

        }
    }
}