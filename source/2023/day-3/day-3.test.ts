import { describe, expect, test } from 'vitest'
import { clearNumbers, getNumbers, checkNumbers } from './day-3.ts'

const grid = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
]

describe('Text clearNumbers function', () => {
  test('Correct from example', () => {
    const clear = clearNumbers(grid)

    expect(clear).toEqual([
      '   ..   ..',
      '...*......',
      '..  ..   .',
      '......#...',
      '   *......',
      '.....+.  .',
      '..   .....',
      '......   .',
      '...$.*....',
      '.   .   ..',
    ])
  })
})

describe('Test getNumbers function', () => {
  test('Correct from example', () => {
    const result = [
      { value: 467, start: 0, end: 3, line: 0, valid: null },
      { value: 114, start: 5, end: 3, line: 0, valid: null },
      { value: 35, start: 2, end: 2, line: 2, valid: null },
      { value: 633, start: 6, end: 3, line: 2, valid: null },
      { value: 617, start: 0, end: 3, line: 4, valid: null },
      { value: 58, start: 7, end: 2, line: 5, valid: null },
      { value: 592, start: 2, end: 3, line: 6, valid: null },
      { value: 755, start: 6, end: 3, line: 7, valid: null },
      { value: 664, start: 1, end: 3, line: 9, valid: null },
      { value: 598, start: 5, end: 3, line: 9, valid: null },
    ]

    const numbers = getNumbers(grid)

    expect(numbers).toEqual(result)
  })
})

describe('Test checkNumbers function', () => {
  test('Correct from example', () => {
    const result = [
      { value: 467, start: 0, end: 3, line: 0, valid: true },
      { value: 114, start: 5, end: 3, line: 0, valid: false },
      { value: 35, start: 2, end: 2, line: 2, valid: true },
      { value: 633, start: 6, end: 3, line: 2, valid: true },
      { value: 617, start: 0, end: 3, line: 4, valid: true },
      { value: 58, start: 7, end: 2, line: 5, valid: false },
      { value: 592, start: 2, end: 3, line: 6, valid: true },
      { value: 755, start: 6, end: 3, line: 7, valid: true },
      { value: 664, start: 1, end: 3, line: 9, valid: true },
      { value: 598, start: 5, end: 3, line: 9, valid: true },
    ]

    const numbers = getNumbers(grid)
    const clearLines = clearNumbers(grid)
    const newNumbers = checkNumbers(numbers, clearLines)

    expect(newNumbers).toEqual(result)
  })
})