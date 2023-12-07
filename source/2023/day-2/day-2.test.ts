import { describe, expect, test } from 'vitest'
import { isSetAccepted } from './day-2.ts'

describe('Test isSetAccepted function', () => {
  test('Correct set 1r 2g 6b', () => {
    const bool = isSetAccepted([
      { color: 'red', amount: 1 },
      { color: 'green', amount: 2 },
      { color: 'blue', amount: 6 },
    ])

    expect(bool).toBe(true)
  })

  test('Failing set 20r 2g 6b', () => {
    const bool = isSetAccepted([
      { color: 'red', amount: 20 },
      { color: 'green', amount: 2 },
      { color: 'blue', amount: 6 },
    ])

    expect(bool).toBe(false)
  })

  test('Failing set 1r 15g 6b', () => {
    const bool = isSetAccepted([
      { color: 'red', amount: 1 },
      { color: 'green', amount: 15 },
      { color: 'blue', amount: 6 },
    ])

    expect(bool).toBe(false)
  })

  test('Failing set 1r 2g 20b', () => {
    const bool = isSetAccepted([
      { color: 'red', amount: 1 },
      { color: 'green', amount: 2 },
      { color: 'blue', amount: 20 },
    ])

    expect(bool).toBe(false)
  })
})

describe('Test possibleGamesAndSum function', () => {
  test('Advent of Code example part 1', () => {})
})
