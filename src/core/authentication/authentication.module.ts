import { Module } from '@nestjs/common';
import { AuthenticationController } from './controller/authentication.controller';
import { AuthenticationService } from './service/authentication.service';
import { LocalPassportStrategy } from './service/passport-strategies/local-passport.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtSecret } from '../../jwt-secret';
import { JwtPassportStrategy } from './service/passport-strategies/jwt-passport.strategy';
import { JwtAuthGuard } from './service/auth-guards/jwt-auth-guard';
import { APP_GUARD } from '@nestjs/core';
import { LocalAuthGuard } from './service/auth-guards/local-auth-guard';

@Module({
  controllers: [AuthenticationController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JwtSecret,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [AuthenticationService, LocalPassportStrategy, JwtPassportStrategy, JwtAuthGuard, LocalAuthGuard],
  exports: [JwtAuthGuard],
})
export class AuthenticationModule {}
