import { BadRequestException, Controller, Get, Header, HttpCode, Param, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { APP_ROUTES } from '../../../app-routes';
import { AnnouncementsService } from '../service/announcements.service';
import { JwtAuthGuard } from '../../../core/authentication/service/auth-guards/jwt-auth-guard';
import { AnnouncementDto } from '../models/announcement.dto';

@Controller()
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @UseGuards(JwtAuthGuard)
  @Header('Cache-Control', 'none')
  @Get(APP_ROUTES.API.ANNOUNCEMENTS.QUERY)
  public query(): Observable<any> {
    return this.announcementsService.query();
  }

  @UseGuards(JwtAuthGuard)
  @Get(`${APP_ROUTES.API.ANNOUNCEMENTS.MARK_AS_READ}/:id`)
  public markAnnouncementAsRead(@Param('id') announcementId: string): Observable<AnnouncementDto> {
    if (!new RegExp(/^[0-9]*$/).test(announcementId)) {
      throw new BadRequestException();
    }
    return this.announcementsService.markAsRead(parseInt(announcementId, 10));
  }
}
