import { AsyncIterableX } from '../../asynciterable/asynciterablex';
import { skipUntil } from '../../asynciterable/skipuntil';

/**
 * @ignore
 */
export function skipUntilProto<TSource>(
  this: AsyncIterableX<TSource>,
  other: () => Promise<any>
): AsyncIterableX<TSource> {
  return skipUntil(this, other);
}

AsyncIterableX.prototype.skipUntil = skipUntilProto;

declare module '../../asynciterable/asynciterablex' {
  interface AsyncIterableX<T> {
    skipUntil: typeof skipUntilProto;
  }
}
