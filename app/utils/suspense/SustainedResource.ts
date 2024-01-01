import { Resource } from './Resource';

class CacheMap<T> {
  protected map: Map<string, T>;

  public constructor() {
    this.map = new Map();
  }

  public get(key: string): T | null {
    const entry = this.map.get(key);
    if (entry == null) {
      return null;
    }
    this.map.delete(key);
    this.map.set(key, entry);
    return entry;
  }

  public set(key: string, value: T): void {
    this.map.set(key, value);
  }

  public remove(key: string): void {
    this.map.delete(key);
  }

  public clear(): void {
    this.map = new Map();
  }
}

export class CachedResource<T> {
  protected resource: Resource<T>;

  constructor(resource: Resource<T>) {
    this.resource = resource;
  }

  resolve(): void {
    this.resource.resolve();
  }

  read(): T {
    return this.resource.read();
  }
}

export class SustainedResource {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected cache: CacheMap<any>;

  constructor() {
    this.cache = new CacheMap();
  }

  public get<T>(key: string, resourceBuilder: () => Resource<T>): CachedResource<T> {
    const resource = this.cache.get(key);
    if (resource == null) {
      const fallbackResource = resourceBuilder();
      const wrappedResource = new CachedResource(fallbackResource);
      this.cache.set(key, wrappedResource);
      return wrappedResource;
    }
    return resource;
  }

  public remove(key: string): void {
    this.cache.remove(key);
  }

  public clear(): void {
    return this.cache.clear();
  }
}
