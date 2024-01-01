import { Result } from 'neverthrow';

export type RepositoryResult<T, E = unknown> = Promise<
  Result<T, E | { kind: 'unknownError'; error: unknown }>
>;
