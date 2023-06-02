import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[PersonModule, TypeOrmModule.forRoot()],//forRoot ele ira procurar um arquivo vhamado ormconfig.json
})
export class AppModule{};



