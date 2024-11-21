import { NestFactory } from '@nestjs/core';
import { HolidaysModule } from './holidays/holidays.module';

async function bootstrap() {
  const app = await NestFactory.create(HolidaysModule);
  await app.listen(process.env.APP_PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log('Server started in port : ', process.env.APP_PORT ?? 3000);
  })
  .catch((err) => {
    console.log(err);
  });
