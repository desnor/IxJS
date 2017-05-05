import { IterableX } from '../../iterable';
import { union } from '../../iterable/union';

export function unionProto<T>(
    this: IterableX<T>,
    right: IterableX<T>,
    comparer?: (x: T, y: T) => boolean): IterableX<T> {
  return new IterableX(union(this, right, comparer));
}

IterableX.prototype.union = unionProto;

declare module '../../iterable' {
  interface IterableX<T> {
    union: typeof unionProto;
  }
}