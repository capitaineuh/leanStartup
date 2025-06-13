import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
//ceci est le main.ts
async function bootstrap() {
  try {
    const logger = new Logger('Bootstrap');
    logger.log('Starting NestJS application...');
    
    const app = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'debug', 'log', 'verbose'],
    });
    
    // Configuration CORS
    const corsOrigins = process.env.CORS_ORIGIN 
      ? process.env.CORS_ORIGIN.split(',') 
      : ['http://localhost:3000'];
    
    app.enableCors({
      origin: corsOrigins,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
      allowedHeaders: 'Content-Type, Accept, Authorization',
    });

    // Ajout du préfixe global pour l'API
    app.setGlobalPrefix('api');

    // Log des requêtes en production
    if (process.env.NODE_ENV === 'production') {
      app.use((req, res, next) => {
        logger.debug(`${req.method} ${req.url}`);
        next();
      });
    }

    const port = process.env.PORT || 3001;
    await app.listen(port);
    logger.log(`✅ Backend is running on: http://localhost:${port}/api`);
    logger.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  } catch (error) {
    console.error('❌ Error starting the application:', error);
    process.exit(1);
  }
}
bootstrap();
