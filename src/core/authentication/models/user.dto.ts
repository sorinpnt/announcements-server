export class UserDto {
  constructor(
    public credentials: {
      username: string;
      password: string;
    },
    public userDetails: {
      firstName: string;
      lastName: string;
    },
    public roles: string[],
  ) {}
}
