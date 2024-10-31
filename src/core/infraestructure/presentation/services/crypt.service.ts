import * as bcrypt from 'bcryptjs';

export class Crypt {
  static async encript(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
    // 10 saltos son lo recomendable porque no es tan largos saltos y el proceso de encriptacion no es tan lento
    // max 20
  }

  static async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
