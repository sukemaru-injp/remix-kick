const name = 'RequiredLoginError' as const;

export class RequiredLoginError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...params: any[]) {
    super(...params);
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, RequiredLoginError);
    }
    this.name = name;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isInstance(e: any): e is RequiredLoginError {
    return e?.name === name;
  }
}
