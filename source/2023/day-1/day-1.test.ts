import { describe, expect, test } from 'vitest'
import {
  firstLastDigitAndSum,
  regexPart1,
  regexPart2,
  textNumbers,
  toNumber,
} from './day-1.ts'

describe('Test toNumber function', () => {
  textNumbers.forEach((number, index) => {
    test(`should return ${index} with input of ${number}`, () => {
      const result = toNumber(number)
      expect(result).toBe(index)
    })
    test(`should return ${index} with input of ${index}`, () => {
      const result = toNumber(`${index}`)
      expect(result).toBe(index)
    })
  })
})

describe('Test firstLastDigitAndSum function', () => {
  test(`Advent of Code example part 1`, () => {
    const result = firstLastDigitAndSum(
      ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'],
      regexPart1,
    )
    expect(result).toBe(142)
  })

  test(`Advent of Code example part 1 single digit`, () => {
    const result = firstLastDigitAndSum(['treb7uchet'], regexPart1)
    expect(result).toBe(77)
  })

  test(`Advent of Code example part 1 3+ digits`, () => {
    const result = firstLastDigitAndSum(['a1b2c3d4e5f'], regexPart1)
    expect(result).toBe(15)
  })

  test(`Advent of Code example part 2`, () => {
    const result = firstLastDigitAndSum(
      [
        'two1nine',
        'eightwothree',
        'abcone2threexyz',
        'xtwone3four',
        '4nineeightseven2',
        'zoneight234',
        '7pqrstsixteen',
      ],
      regexPart2,
    )
    expect(result).toBe(281)
  })

  test(`Advent of Code example part 2 with empty end`, () => {
    const result = firstLastDigitAndSum(
      [
        'two1nine',
        'eightwothree',
        'abcone2threexyz',
        'xtwone3four',
        '4nineeightseven2',
        'zoneight234',
        '7pqrstsixteen',
        '',
      ],
      regexPart2,
    )
    expect(result).toBe(281)
  })

  test(`Advent of Code example part 2 3+ digits`, () => {
    const result = firstLastDigitAndSum(['zoneight234'], regexPart2)
    expect(result).toBe(14)
  })

  test(`Custom example with three`, () => {
    const result = firstLastDigitAndSum(['threeuchet'], regexPart2)
    expect(result).toBe(33)
  })

  test(`Input example last item`, () => {
    const result = firstLastDigitAndSum(['sixeightfive3sdtwo'], regexPart2)
    expect(result).toBe(62)
  })

  test(`Breaking my solution eightwo `, () => {
    const result = firstLastDigitAndSum(['eightwo'], regexPart2)
    expect(result).toBe(82)
  })
})
