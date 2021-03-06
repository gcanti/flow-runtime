// @flow

import assert from 'assert'
import type { Validation } from '../src/index'
import { Type } from '../src/index'
import * as t from '../src/index'
import { PathReporter } from '../src/reporters/default'

export function assertValidationSuccess<T>(validation: Validation<T>): void {
  assert.ok(t.isSuccess(validation))
}

export function assertValidationFailure<T>(validation: Validation<T>, descriptions: Array<string>): void {
  assert.ok(t.isFailure(validation))
  assert.deepEqual(PathReporter.report(validation), descriptions)
}

export const number2: Type<number> = new Type(
  'number2',
  (v, c) => t.map(n => n * 2, t.number.validate(v, c))
)
