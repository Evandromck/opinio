import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from 'src/controllers/person.controller';
import { PersonModel } from 'src/models/person.model';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])], // Importa o módulo TypeOrmModule e registra a entidade PersonModel
  controllers: [PersonController], // Define o controlador PersonController para este módulo
})
export class PersonModule {}
