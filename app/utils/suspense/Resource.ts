type ResourceSet<T> =
  | { status: 'pending' }
  | { status: 'fulfilled'; value: T }
  | { status: 'rejected'; value: unknown };

type ResourceResolver<T> = () => Promise<T>;
const emptyResult = Symbol('emptyResult');

export class Resource<T> {
  protected resourceSet: ResourceSet<T> = { status: 'pending' };
  protected suspender: Promise<T | typeof emptyResult>;
  protected readonly resolver: ResourceResolver<T>;

  constructor(resolver: ResourceResolver<T>) {
    this.suspender = Promise.resolve(emptyResult);
    this.resolver = resolver;
  }

  public static set<T>(resolver: ResourceResolver<T>) {
    const resource = new Resource(resolver);
    resource.resolve();
    return resource;
  }

  public resolve(): void {
    this.resourceSet = { status: 'pending' };

    const suspender = this.resolver()
      .then((val) => {
        this.resourceSet = {
          status: 'fulfilled',
          value: val,
        };
        return val;
      })
      .catch<typeof emptyResult>((err: unknown) => {
        this.resourceSet = {
          status: 'rejected',
          value: err,
        };
        return emptyResult;
      });

    this.suspender = suspender;
  }

  public read(): T {
    switch (this.resourceSet.status) {
      case 'pending':
        throw this.suspender;
      case 'fulfilled':
        return this.resourceSet.value;
      case 'rejected':
        throw this.resourceSet.value;
      default:
        throw new Error('予想外');
    }
  }
}
