import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });

  // const config = new DocumentBuilder()
  //   .setTitle('Fate API')
  //   .setDescription('Fate DN Return API Services')
  //   .setVersion('1.0')
  //   .setLicense(
  //     'Copyrights � 2024. Official Fate DN Return',
  //     'https://opensource.org/licenses/MIT',
  //   )
  //   .addBearerAuth(
  //     {
  //       type: 'http',
  //       scheme: 'bearer',
  //       bearerFormat: 'JWT',
  //       description: 'Enter JWT token',
  //     },
  //     'bearer-token',
  //   )
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
