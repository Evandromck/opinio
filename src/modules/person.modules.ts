import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonController } from "src/controllers/person.controlles";

@Module({
  imports: [TypeOrmModule.forFeature([PersonModule])],//dizer para o typeorm como ele deve lidar com os nossos modelos 
  controllers: [PersonController],
})

export class PersonModule{}