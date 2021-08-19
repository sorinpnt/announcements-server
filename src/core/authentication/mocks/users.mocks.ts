import { UserDto } from '../models/user.dto';

export const usersMock: UserDto[] = [
  {
    credentials: {
      username: 'admin',
      password: 'admin',
    },
    userDetails: {
      firstName: 'John',
      lastName: 'Doe',
    },
    roles: ['admin', 'user'],
  },
];
