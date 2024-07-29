import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from './mail/mail.module';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),

    MailModule,
    EventModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
