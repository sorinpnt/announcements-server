import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoginResponseDto } from '../models/login-response.dto';
import { JwtService } from '@nestjs/jwt';
import { usersMock } from '../mocks/users.mocks';
import { UserDto } from '../models/user.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly jwtService: JwtService) {}

  login(username: string, password: string): Observable<LoginResponseDto> {
    return new Observable<LoginResponseDto>(subscriber => {
      const user: UserDto = usersMock.find(u => u.credentials.username === username && u.credentials.password === password);
      const jwtToken = user
        ? this.jwtService.sign({
            user: user.userDetails,
            roles: user.roles,
          })
        : null;
      subscriber.next(new LoginResponseDto(jwtToken));
      subscriber.complete();
    }).pipe(delay(2000));
  }
}
