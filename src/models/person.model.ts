import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Define que a classe é uma entidade mapeada no banco de dados
export class PersonModel {
  @PrimaryGeneratedColumn() // Define a coluna como uma chave primária com valor gerado automaticamente
  id: number;

  @Column({ length: 120 }) // Define a coluna 'name' com o tipo 'varchar' e comprimento máximo de 120 caracteres
  name: string;

  @Column('int') // Define a coluna 'age' com o tipo 'int'
  age: number;

  @Column({ length: 255 }) // Define a coluna 'email' com o tipo 'varchar' e comprimento máximo de 255 caracteres
  email: string;
}

