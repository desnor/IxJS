'use strict';

import { bindCallback } from '../internal/bindcallback';

export async function forEach<TSource>(
    source: AsyncIterable<TSource>,
    projection: (value: TSource, index: number) => void,
    thisArg?: any): Promise<void> {
  const fn = bindCallback(projection, thisArg, 2);
  let i = 0;
  for await (let item of source) {
    fn(item, i++);
  }
}