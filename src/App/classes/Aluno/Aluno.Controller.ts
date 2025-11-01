import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AlunoService } from "./Aluno.Service";
import { AlunoDto } from "./dto/aluno.dto";
import { ApiResponseInterface } from "../../Interface/ApiResponseInterface";
import { Result } from "tedious/lib/token/helpers";
import { FileInterceptor } from "@nestjs/platform-express";
import { AlunoSchema } from "./Schemas/AlunoSchema";
import { AlunoModel } from "src/App/Model/Aluno.Model";


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
    async create(
        @Body() dto: AlunoDto,
        @UploadedFile() file: Express.Multer.File
    ) : Promise<ApiResponseInterface> {
        try{

            if (file) dto.imagem = file.buffer;
            
            else throw new Error("Imagem é obrigatória");

            const result = await this.service.create(dto);

            return {
                status: 201,
                message: 'Aluno criado com sucesso',
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
    @ApiResponse({status: 200, description: "Aluno atualizado com sucesso"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    @UseInterceptors(FileInterceptor('imagem'))
    async update(
        @Param("Id", ParseIntPipe) id : number,
         @Body() dto: AlunoDto,
        @UploadedFile() file: Express.Multer.File
    ) : Promise<ApiResponseInterface> {
        try{
            console.log(dto);
            if (file) dto.imagem = file.buffer;
            else throw new Error("Imagem é obrigatória");

            const result = await this.service.update(dto, id);

            return {
                status: 200,
                message: 'Aluno atualizado com sucesso.',
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

    @Get(":Id/")
    @ApiQuery({ name: 'BuscaImagem', required: false, type: Boolean, description: 'Se falso, não retorna a imagem, padrão é verdadeiro' })
    @ApiResponse({status: 200, description: "Aluno criado com sucesso"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    async get(
        @Param("Id", ParseIntPipe) id : number,
        @Query("BuscaImagem", new DefaultValuePipe(true), ParseBoolPipe) getImage : boolean
    ) : Promise<ApiResponseInterface>{
        try{

            const result = await this.service.get(id, getImage);

            return {
                status: 200,
                message: 'Busca realizada com sucesso.',
                dataUnit: result,
            } ;
        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao registrar buscar usuário.',
                error: error.message || error,
            }

        }
    }

    @Get()
    @ApiQuery({ name: 'BuscaImagem', required: false, type: Boolean, description: 'Se falso, não retorna a imagem, padrão é falso' })
    @ApiResponse({status: 200, description: "Busca Concluida."})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    async getAll(
        @Query("BuscaImagem", new DefaultValuePipe(false), ParseBoolPipe) getImage : boolean
    ) : Promise<ApiResponseInterface> {
        try{

            const result = await this.service.getAll(getImage);

            return {
                status: 200,
                message: 'Busca Concluida.',
                dataUnit: result,
            } ;
        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao buscar usuários.',
                error: error.message || error,
            }

        }
    }
}