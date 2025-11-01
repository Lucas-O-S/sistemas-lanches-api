import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Minha API de Restaurante')   // título da documentação
    .setDescription('Documentação da API com NestJS e Swagger')
    .setVersion('1.0')
    .addTag('restaurante') // opcional: agrupa endpoints
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // rota: http://localhost:3000/api
  app.useGlobalPipes(new ValidationPipe({
      transform: true,        
      whitelist: true,        
      forbidNonWhitelisted: true,
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();