import { Type } from '@angular/core';

import { spyOnClass } from '.';

export function provideMock<T>(spiedClass: Type<T>) {
  return {
    provide: spiedClass,
    useValue: spyOnClass(spiedClass)
  };
}

