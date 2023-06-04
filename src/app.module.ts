import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/person.module';
import * as path from 'path';

@Module({
  imports: [
    PersonModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'better-sqlite3',
        database: path.resolve(__dirname, '..', 'db.sql'),
        synchronize: true,
        entities: [path.resolve(__dirname, '..', 'dist', '**', '*model.js')],
      }),
    }),
  ],
})
export class AppModule {}





