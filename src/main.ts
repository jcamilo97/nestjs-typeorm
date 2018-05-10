import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 5000;
  app.enableCors();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  await app.listen(port, () => console.log(`Application is listening on port ${port}`));
}
bootstrap();
