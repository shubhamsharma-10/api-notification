import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',  // Local development
      'https://api-notification-k9ln3f1w6-shubham-sharmas-projects-dea5e0e3.vercel.app', // Your API URL
      '*' // Temporarily allow all origins while testing
    ],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
  });
  
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Notification Preferences API')
    .setDescription('API for managing user notification preferences')
    .setVersion('1.0')
    .addTag('preferences')
    .addTag('notifications')
    .addServer('/') // Add this line
    .build();

  const document = SwaggerModule.createDocument(app, config);
  

  SwaggerModule.setup('api-docs', app, document, {
    customSiteTitle: 'Notification API Documentation',
    customfavIcon: 'https://swagger.io/favicon-32x32.png',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    ],
  });
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();