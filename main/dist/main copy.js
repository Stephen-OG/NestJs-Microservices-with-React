"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqps://qjxkbsoz:9bA9YcgF0fSDPKeYcLNLoBL-GxbpGfTW@snake.rmq2.cloudamqp.com/qjxkbsoz'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    app.listen(() => {
        console.log('Microservice is listening');
    });
}
bootstrap();
//# sourceMappingURL=main%20copy.js.map