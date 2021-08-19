import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoginPayloadDto } from '../models/login-payload.dto';
import { AuthenticationService } from '../service/authentication.service';
import { APP_ROUTES } from '../../../app-routes';
import { LoginResponseDto } from '../models/login-response.dto';
import { LocalAuthGuard } from '../service/auth-guards/local-auth-guard';

@Controller()
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post(APP_ROUTES.API.AUTHENTICATION.LOGIN)
  public login(@Body() loginPayloadDto: LoginPayloadDto): Observable<LoginResponseDto> {
    const { username, password } = loginPayloadDto;
    return this.authenticationService.login(username, password);
  }
}
