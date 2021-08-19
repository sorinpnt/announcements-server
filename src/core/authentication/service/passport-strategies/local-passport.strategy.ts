import { PassportStrategy } from '@nestjs/passport';
import { AuthenticationService } from '../authentication.service';
import { Strategy } from 'passport-local';
import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { LoginResponseDto } from '../../models/login-response.dto';

@Injectable()
export class LocalPassportStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenticationService) {
    super();
  }

  public validate(username: string, password: string): Observable<LoginResponseDto> {
    return this.authService.login(username, password);
  }
}
