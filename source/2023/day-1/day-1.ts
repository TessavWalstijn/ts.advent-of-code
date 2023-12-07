import fs from 'fs'
import path from 'path'
import { __dirname } from '../../utils/dirname.ts'

export const textNumbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

export const toNumber = (value: string) => {
  switch (value) {
    case textNumbers[0]:
      return 0
    case textNumbers[1]:
      return 1
    case textNumbers[2]:
      return 2
    case textNumbers[3]:
      return 3
    case textNumbers[4]:
      return 4
    case textNumbers[5]:
      return 5
    case textNumbers[6]:
      return 6
    case textNumbers[7]:
      return 7
    case textNumbers[8]:
      return 8
    case textNumbers[9]:
      return 9
    default:
      return Number(value)
  }
}

export const firstLastDigitAndSum = (lines: string[], regex: RegExp) => {
  const results = lines
    .map((line) => {
      if (line === '') return null

      // Magic matching overlapping regex
      // https://stackoverflow.com/a/33903830/7185314
      const found = Array.from(line.matchAll(regex), (match) => {
        return match[1]
      })

      if (found === null) return null

      const numberA = toNumber(found[0])
      const numberB = toNumber(found[found.length - 1])

      return Number(`${numberA}${numberB}`)
    })
    .filter((result) => result !== null)

  let awnser = 0

  results.forEach((result) => {
    if (result === null) return
    awnser += result
  })

  return awnser
}

export const regexPart1 = /([0-9])/g
export const regexPart2 =
  /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g

export const day1 = () => {
  const input = fs.readFileSync(
    path.join(__dirname(import.meta.url), '/input.txt'),
    'utf8',
  )

  const lines = input.split('\n')
  console.log('Part 1: ', firstLastDigitAndSum(lines, regexPart1))
  console.log('Part 2: ', firstLastDigitAndSum(lines, regexPart2))
}
