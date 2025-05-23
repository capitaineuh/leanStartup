import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    console.log('Starting NestJS application...');
    const app = await NestFactory.create(AppModule);
    
    // Configuration CORS
    app.enableCors({
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

    // Ajout du préfixe global pour l'API
    app.setGlobalPrefix('api');

    // Log des requêtes
    app.use((req, res, next) => {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
      next();
    });

    const port = 3001;
    await app.listen(port);
    console.log(`✅ Backend is running on: http://localhost:${port}/api`);
    console.log('📝 Available endpoints:');
    console.log('  - POST /api/users (Register)');
    console.log('  - POST /api/auth/login (Login)');
    console.log('  - POST /api/tenders (Create Tender)');
    console.log('  - GET /api/tenders (List Tenders)');
  } catch (error) {
    console.error('❌ Error starting the application:', error);
    process.exit(1);
  }
}
bootstrap();
