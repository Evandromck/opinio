import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';

export class PersonSchema {
  @IsString() // Define que a propriedade "name" deve ser uma string
  @MaxLength(120) // Define o tamanho máximo da propriedade "name" como 120 caracteres
  name: string; // Propriedade "name" do tipo string

  @IsInt() // Define que a propriedade "age" deve ser um número inteiro
  @Min(1) // Define o valor mínimo da propriedade "age" como 1
  age: number; // Propriedade "age" do tipo number

  @IsString() // Define que a propriedade "email" deve ser uma string
  @IsEmail() // Define que a propriedade "email" deve ser um endereço de e-mail válido
  @MaxLength(255) // Define o tamanho máximo da propriedade "email" como 255 caracteres
  email: string; // Propriedade "email" do tipo string
}
