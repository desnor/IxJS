'use strict';

import { AsyncIterableX } from '../asynciterable';
import { extremaBy, defaultCompare } from './_extremaby';

export function maxBy<TSource, TKey>(
    source: AsyncIterable<TSource>,
    keySelector: (x: TSource) => TKey,
    comparer: (x: TKey, y: TKey) => number = defaultCompare): AsyncIterableX<TSource> {
  return extremaBy(source, keySelector, comparer);
}