import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from "@nestjs/common";
import { LancheService } from "./Lanche.Service";
import { ApiTags, ApiResponse, ApiBody, ApiConsumes } from "@nestjs/swagger";
import { LancheSchema } from "./Schema/Lanche.Schema";
import { LancheDto } from "./dto/Lanche.dto";
import { ApiResponseInterface } from "src/App/Interface/ApiResponseInterface";
import { LancheModel } from "src/App/Model/Lanche.Model";


@Controller("lanche")
@ApiTags("Lanche")
export class LancheController{

    constructor(private readonly service : LancheService){}

    @Post()
    @ApiResponse({status: 201, description: "Lanche do aluno criado com sucesso"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    @ApiBody(LancheSchema)
    async create(@Body() dto : LancheDto) : Promise<ApiResponseInterface>{

        try{

            const result = await this.service.create(dto);

            return {
                status: 201,
                message: 'Lanche do aluno criado com sucesso',
                dataUnit: result,
            }

        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao registrar lanche.',
                error: error.message || error,
            }

        }


    }

    
    @Put(":id")
    @ApiResponse({status: 200, description: "Lanche do aluno atualizado com sucesso"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    @ApiBody(LancheSchema)
    async updtate(
        @Body() dto : LancheDto,
        @Param("id", ParseIntPipe) id : number
    ) : Promise<ApiResponseInterface>{

        try{

            const result = await this.service.update(dto, id);

            return {
                status: 200,
                message: 'Lanche do aluno atualizado com sucesso',
                dataUnit: result,
            }

        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao atualizar lanche.',
                error: error.message || error,
            }

        }


    }

    @Get(":id")
    @ApiResponse({status: 200, description: "Busca Concluida"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    async get(
        @Param("id", ParseIntPipe) id : number
    ) : Promise<ApiResponseInterface>{

        try{

            const result = await this.service.get(id);

            return {
                status: 200,
                message: 'Lanche do aluno atualizado com sucesso',
                dataUnit: result
            }

        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao buscar lanche.',
                error: error.message || error,
            }

        }


    }
 
    @Get()
    @ApiResponse({status: 200, description: "Busca Concluida"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    async getAll() : Promise<ApiResponseInterface>{

        try{

            const result = await this.service.getAll();

            return {
                status: 200,
                message: 'Lanche do aluno atualizado com sucesso',
                dataUnit: result
            }

        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao buscar lanches.',
                error: error.message || error,
            }

        }


    }

    @Delete(":id")
    @ApiResponse({status: 200, description: "Deleção Concluida"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    async delete(
        @Param("id", ParseIntPipe) id : number
    ) : Promise<ApiResponseInterface>{

        try{

            const result = await this.service.delete(id);

            return {
                status: 200,
                message: 'Lanche do aluno deletado com sucesso',
                dataUnit: result
            }

        }
        catch(error){
            return{
                status: 500,
                message: 'Erro ao deletar lanche.',
                error: error.message || error,
            }

        }


    }

}