import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonModel } from 'src/models/person.model';
import { PersonSchema } from "src/schemas/person.schema";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Enquete')
@Controller('/person')
export class PersonController {
  constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) {}

  // Cria um novo usuário
  @Post()
  public async create(@Body() body: PersonSchema): Promise<PersonModel> {    
    return this.model.save(body);
  }

  // Obtém um único usuário pelo ID
  @Get(':id')
  public async getOne(@Param('id', ParseIntPipe) id: number): Promise<PersonModel> {
    const person = await this.model.findOne({ where: { id } });
    
    if (!person) {
      throw new NotFoundException(`Usuário não encontrado com o ID fornecido ${id}`);
    }
    
    return person;
  }

  // Obtém todos os usuários
  @Get()
  public async getAll(): Promise<PersonModel[]> {
    return this.model.find();
  }

  // Atualiza um usuário existente pelo ID
  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PersonSchema,
  ): Promise<PersonModel> {
    const person = await this.model.findOne({ where: { id } });

    if (!person) {
       throw new NotFoundException(`Usuário não encontrado com o ID fornecido ${id}`);  
    }
    
    await this.model.update({ id }, body);
    return this.model.findOne({ where: { id } });
  }

  // Deleta um usuário pelo ID
  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<string> {
    const person = await this.model.findOne({ where: { id } });
   
    if (!person) {
      throw new NotFoundException(`Usuário não encontrado com o ID fornecido ${id}`);
    }

    await this.model.delete(id);

    return `Usuário com o ID ${id} foi deletado!`;
  }
}
