import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://qjxkbsoz:9bA9YcgF0fSDPKeYcLNLoBL-GxbpGfTW@snake.rmq2.cloudamqp.com/qjxkbsoz'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
    },
  },

  });
  app.listen( () => {
    console.log('Microservice is listening')
  });
}
bootstrap();
