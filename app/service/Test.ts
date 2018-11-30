import { Service } from 'egg';

export default class TestService extends Service {
  public async sayHi(name: string) {
    return `hello ${name}`;
  }
}
