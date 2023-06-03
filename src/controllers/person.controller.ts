import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonModel } from 'src/models/person.model';

@Controller('/person')
export class PersonController {
  constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>,){}
  @Post()
  public create(): any {
    return {data: 'Create !!!!'}
  }
  @Get(':id')
  public getOne(): any {
    return {data: 'Get one !!!!'}
  }
  @Get()
  public async getAll(): Promise<{ data: PersonModel[]}> {
    const list = await this.model.find();
    return { data: list}
  }
  @Put(':id')
  public update(): any {
    return {data: 'Update !!!!'}
  }
  @Delete(':id')
  public delete(): any {
    return {data: 'Delete !!!!'}
  }
}