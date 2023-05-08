import { validEmail } from '../helper/validation/validation';

describe('Valid email address format', () => {
  it('correct email', () => {
    const email = 'test+name@example.com';
    expect(validEmail(email).status).toBeTruthy();

    const email2 =
      "abcABC012.!#$%&'*+/=?^_`{|}~-" + '@' + 'abcABC-012' + '.abcABC-012';
    expect(validEmail(email2).status).toBeTruthy();
  });

  it('email empty', () => {
    const email = '';
    expect(validEmail(email).status).toBeFalsy();
  });

  it('contains an unusable string', () => {
    const email = 'a' + '@' + ".!#$%&'*+/=?^_" + "!#$%&'*+/=?^_";
    expect(validEmail(email).status).toBeFalsy();
  });
});