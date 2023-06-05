import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class PersonSchema {
  @ApiProperty({
    description: 'Array de perguntas do questionário',
    example: [{ text: 'Qual é a sua cor favorita?' }],
  })
  @IsString() // Define que a propriedade "name" deve ser uma string
  @MaxLength(120) // Define o tamanho máximo da propriedade "name" como 120 caracteres
  name: string; // Propriedade "name" do tipo string

  @ApiProperty({
    description: 'ID do questionário',
    example: 1,
  })
  @IsInt() // Define que a propriedade "age" deve ser um número inteiro
  @Min(1) // Define o valor mínimo da propriedade "age" como 1
  
  Pergunta: string; // Propriedade "age" do tipo number

  @ApiProperty({
    description: 'Array de respostas para as perguntas do questionário',
    example: ['Azul', 'Vermelho', 'Verde'],
  })
  @IsString() // Define que a propriedade "email" deve ser uma string
  @IsEmail() // Define que a propriedade "email" deve ser um endereço de e-mail válido
  @MaxLength(255) // Define o tamanho máximo da propriedade "email" como 255 caracteres
  Resposta: string; // Propriedade "email" do tipo string
}
