import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Fate API')
    .setDescription('Fate DN Return API Services')
    .setVersion('1.0')
    .setLicense(
      'Copyrights � 2024. Official Fate DN Return',
      'https://opensource.org/licenses/MIT',
    )
    // .addServer('https://api.fatednreturn.org', 'Production Server')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token',
      },
      'bearer-token', // This name must match the security scheme name below
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
