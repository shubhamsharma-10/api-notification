import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Notification Preferences API')
    .setDescription('API for managing user notification preferences')
    .setVersion('1.0')
    .addTag('preferences')
    .setBasePath('api') 
    .addServer('https://api-notification-k9ln3f1w6-shubham-sharmas-projects-dea5e0e3.vercel.app') 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();