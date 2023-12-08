import { describe, expect, test } from 'vitest'
import { isSetAccepted, possibleGamesAndSum } from './day-2.ts'

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
  test('Advent of Code example part 1', () => {
    const result = possibleGamesAndSum([
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
    ])

    expect(result).toBe(8)
  })
})
