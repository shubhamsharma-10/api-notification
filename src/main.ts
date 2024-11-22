import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  
  // Updated Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Notification Preferences API')
    .setDescription('API for managing user notification preferences')
    .setVersion('1.0')
    .addTag('preferences')
    .addTag('notifications') // Add this line to include notifications endpoints
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  // Remove setBasePath and use addServer properly
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Notification API Documentation'
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();