import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/person.module';
import * as path from 'path';

@Module({
  imports: [
    PersonModule, // Importa o módulo PersonModule
    TypeOrmModule.forRootAsync({ // Configura a conexão com o banco de dados de forma assíncrona
      useFactory: () => ({ // Usa uma função factory para retornar as configurações da conexão
        type: 'better-sqlite3', // Define o tipo de banco de dados como "better-sqlite3"
        database: path.resolve(__dirname, '..', 'db.sql'), // Define o caminho absoluto para o arquivo de banco de dados SQLite
        synchronize: true, // Habilita a sincronização automática do TypeORM
        entities: [path.resolve(__dirname, '..', 'dist', '**', '*model.js')], // Define os caminhos das entidades do TypeORM
      }),
    }),
  ],
})
export class AppModule {} // Define o módulo AppModule




