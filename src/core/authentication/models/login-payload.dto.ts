import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginPayloadDto {
  @MinLength(5)
  @MaxLength(10)
  @IsNotEmpty()
  username: string;

  @MinLength(5)
  @MaxLength(15)
  @IsNotEmpty()
  password: string;
}
