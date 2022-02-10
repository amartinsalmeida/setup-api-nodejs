import { User } from '@models/User';

export class UsersController {
  static teste(): void {
    const user = new User();

    user.name = 'Anderson';
    user.email = 'amartinsalmeida@yahoo.com.br';
  }
}
