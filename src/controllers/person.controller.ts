import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonModel } from 'src/models/person.model';
import { PersonSchema } from "src/schemas/person.schema";

@Controller('/person')
export class PersonController {
  constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>,){}

  //--------------------Criando usuarios -----------------------

  @Post()
  public async create(@Body() body: PersonSchema): Promise<{data: PersonModel}> {
    const personCreated = await this.model.save(body) //salvando no banco 
    return {data: personCreated}
  }

   //-----------------Buscando usuarios pelo id------------------

  @Get(':id')
  public async getOne( @Param('id', ParseIntPipe) id: number, ): Promise<{data: PersonModel}> {
    const person = await this.model.findOne({ where: {id} });
    
    if (!person){
      throw new NotFoundException(`Usuário não encontrado com id fornecido ${id}`)
    }
    return {data: person};
  }
  //-----------------Buscando todos os usuarios------------------

  @Get()
  public async getAll(): Promise<{ data: PersonModel[]}> {
    const list = await this.model.find();
    return { data: list}
  }
  //--------------------Atualizando Usuario------------------
  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PersonSchema,
  ): Promise<{data: PersonModel}> {
    const person = await this.model.findOne({ where: {id}});

    if(!person){
       throw new NotFoundException(`Usuário não encontrado com id fornecido ${id}`)  
    }
    await this.model.update({id}, body);
    return {data: await this.model.findOne({where: {id} }) };
  }

//--------------------Deletando Usuario pelo id------------------

  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: string }> {
    const person = await this.model.findOne({where: {id}});
   
    if(!person){
      throw new NotFoundException(`Usuário não encontrado com id fornecido ${id}`);
    }

    await this.model.delete(id);

    return {data: `Usuário id ${id} foi deletado!`}
  }
}