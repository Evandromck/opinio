import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    description: 'O nome do usuário',
    example: 'Evandro Araujo',
  })
  name: string;

  @ApiProperty({
    description: 'O endereço de e-mail do usuário',
    example: 'johndoe@example.com',
  })
  email: string;
  
  @ApiProperty({
    description: 'A senha do usuário',
    example: 'senha123 para o reset',
  })
  password: string;
}


