import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://fatednreturn:ag3qn9R7v0I4L586@db-mongodb-sgp1-87822-rentapps-bbb9b6a8.mongo.ondigitalocean.com/fatednreturn?tls=true&authSource=admin&replicaSet=db-mongodb-sgp1-87822-rentapps',
    ),
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
