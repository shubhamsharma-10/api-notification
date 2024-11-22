import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationLog, NotificationLogSchema } from './schemas/notification-log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NotificationLog.name, schema: NotificationLogSchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class NotificationsModule {}