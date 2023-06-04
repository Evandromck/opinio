import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformaInterceptor } from './interceptors/transform.interceptors';

// Função assíncrona para inicializar a aplicação
async function bootstrap() {
  // Cria uma instância da aplicação Nest
  const app = await NestFactory.create(AppModule);

  // Define um prefixo global para todas as rotas da API
  app.setGlobalPrefix('/api/v1');

  // Aplica um pipe de validação global para todas as requisições
  app.useGlobalPipes(new ValidationPipe());

  // Aplica um interceptor global de transformação para todas as respostas
  app.useGlobalInterceptors(new TransformaInterceptor());

  // Inicia a aplicação na porta 8080
  await app.listen(8080);
}

// Chama a função de inicialização
bootstrap();
