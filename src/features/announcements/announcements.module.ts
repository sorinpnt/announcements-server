import { Module } from '@nestjs/common';
import { AnnouncementsController } from './controller/announcements.controller';
import { AnnouncementsService } from './service/announcements.service';
import { JwtAuthGuard } from '../../core/authentication/service/auth-guards/jwt-auth-guard';

@Module({
  imports: [JwtAuthGuard],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService],
})
export class AnnouncementsModule {}
