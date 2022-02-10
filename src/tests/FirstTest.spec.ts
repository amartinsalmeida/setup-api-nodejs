import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Anderson';
  user.email = 'amartinsalmeida@yahoo.com.br';

  expect(user.name).toEqual('Anderson');
});
