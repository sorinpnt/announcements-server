import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { APP_ROUTES } from './app-routes';
import { AuthenticationModule } from './core/authentication/authentication.module';
import { AnnouncementsModule } from './features/announcements/announcements.module';

@Module({
  imports: [
    AuthenticationModule,
    AnnouncementsModule,
    RouterModule.register([
      {
        path: APP_ROUTES.API.AUTHENTICATION.PREFIX,
        module: AuthenticationModule,
      },
      {
        path: APP_ROUTES.API.ANNOUNCEMENTS.PREFIX,
        module: AnnouncementsModule,
      },
    ]),
  ],
})
export class AppModule {}
