import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformaInterceptor } from './interceptors/transform.interceptors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Função assíncrona para inicializar a aplicação
async function bootstrap() {
  // Cria uma instância da aplicação Nest
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Fábrica de Sinapse')
    .setDescription(
      'O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.',
    )
    .setVersion('1.0')
    .addTag('api Enquete/User')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

 /*  // Define um prefixo global para todas as rotas da API
  app.setGlobalPrefix('/api/v1');

  // Aplica um pipe de validação global para todas as requisições
  app.useGlobalPipes(new ValidationPipe());

  // Aplica um interceptor global de transformação para todas as respostas
  app.useGlobalInterceptors(new TransformaInterceptor()); */

  // Inicia a aplicação na porta 8080
  await app.listen(8080);
}

// Chama a função de inicialização
bootstrap();
