"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        console.log('Starting NestJS application...');
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({
            origin: 'http://localhost:3000',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        });
        app.setGlobalPrefix('api');
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
    }
    catch (error) {
        console.error('❌ Error starting the application:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map