import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración base de Swagger
  const config = new DocumentBuilder()
    .setTitle('Mi Primer API en NestJS')
    .setDescription('Documentación de prueba en un proyecto vacío')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // Se servirá en /docs

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();