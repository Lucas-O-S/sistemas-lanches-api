import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AlunoService } from "./Aluno.Service";
import { AlunoDto } from "./dto/aluno.dto";
import { ApiResponseInterface } from "../Interface/ApiResponseInterface";
import { Result } from "tedious/lib/token/helpers";


@Controller("aluno")
@ApiTags("Aluno")
export class AlunoController {

    constructor(private readonly service: AlunoService) {}

    @Post()
    @ApiBody({type : AlunoDto})
    @ApiResponse({status: 201, description: "Aluno criado com sucesso"})
    @ApiResponse({status: 500, description: "Erro na requisição"})
    async create(@Body("data") dto: AlunoDto) : Promise<ApiResponseInterface> {
        try{
            const Result = await this.service.create(dto);
            return {
                status: 201,
                message: 'Usuário registrado com sucesso.',
                dataUnit: Result,
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