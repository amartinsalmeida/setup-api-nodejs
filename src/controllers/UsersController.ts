import { User } from '@models/User';

export class UsersController {
  static teste() {
    const user = new User();

    user.name = 'Anderson';
    user.email = 'amartinsalmeida@yahoo.com.br';
  }
}
