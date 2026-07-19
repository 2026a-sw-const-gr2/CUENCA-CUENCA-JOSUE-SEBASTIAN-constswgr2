import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-api-key'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API de Proyección Fotovoltaica')
    .setDescription(
      'API versionada para calcular la energía producida por paneles solares.'
    )
    .setVersion('2.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
        description: 'Clave de acceso para utilizar la API v2.',
      },
      'x-api-key'
    )
    .build();

  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerConfig
  );

  SwaggerModule.setup(
    `${globalPrefix}/docs`,
    app,
    swaggerDocument,
    {
      swaggerOptions: {
        persistAuthorization: true,
      },
    }
  );

  const port = process.env['PORT'] ?? 3000;
  await app.listen(port);

  Logger.log(`API disponible en http://localhost:${port}/${globalPrefix}`);
  Logger.log(
    `Swagger disponible en http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();