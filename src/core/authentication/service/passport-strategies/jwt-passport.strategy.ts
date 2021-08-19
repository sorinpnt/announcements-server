import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtSecret } from '../../../../jwt-secret';
import { UserDto } from '../../models/user.dto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class JwtPassportStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JwtSecret,
    });
  }

  public validate(payload: UserDto): Observable<any> {
    return of(payload);
  }
}
