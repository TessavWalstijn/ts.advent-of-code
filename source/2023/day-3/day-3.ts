import { __dirname } from '../../utils/dirname.ts'
import { getLinesFromInput } from '../../utils/getLinesFromInput.ts'

export type tGridElement = {
  token: string
  visited: boolean
  valid: boolean | null
}

export type tGrid = tGridElement[][]

export type tNumber = {
  value: number
  start: number
  end: number
  line: number
  valid: boolean | null
}

// export const getGrid = (input: string[]): tGrid =>
//   input.map((line) =>
//     [...line].map((token) => ({
//       token,
//       visited: false,
//       valid: null
//     })),
//   )

export const getNumbers = (lines: string[]) => {
  const numbers: tNumber[] = []

  lines.forEach((line, index) => {
    const matches = line.match(/\w+/g)
    if (matches === null) return
    matches.forEach((match) => {
      const completeMatch = line.match(/\w+/)
      if (completeMatch === null || completeMatch.index === undefined) return
      line = line.replace(match, [...match].map(() => ' ').join(''))
      numbers.push({
        value: Number(match),
        start: completeMatch.index,
        end: match.length,
        line: index,
        valid: null,
      })
    })
  })

  return numbers
}

export const clearNumbers = (lines: string[]) =>
  lines.map((line) => line.replace(/\w/g, ' '))

export const checkNumbers = (numbers: tNumber[], lines: string[]) => {
  const maxWithEnd = lines[0].length
  const maxHeightEnd = lines.length

  return numbers.map((number) => {
    let mostLeftOfNumber = 0
    let mostRightOfNumber = 0
    if (number.start !== 0) {
      mostLeftOfNumber = number.start - 1
      mostRightOfNumber = 1
    }
    mostRightOfNumber += number.end + 1
    let totalRightCheck = number.start + number.end + 1
    if (totalRightCheck > maxWithEnd) mostRightOfNumber = maxWithEnd


    if (number.line !== 0) {
      const resultMin1 = checkNumberOnLine(
        lines[number.line - 1],
        mostLeftOfNumber,
        mostRightOfNumber,
        number.value
      )
      if (resultMin1) {
        number.valid = true
      }
    }

    const result0 = checkNumberOnLine(
      lines[number.line],
      mostLeftOfNumber,
      mostRightOfNumber,
      number.value
    )
    if (result0) {
      number.valid = true
    }

    if (number.line !== maxHeightEnd) {
      const resultAdd1 = checkNumberOnLine(
        lines[number.line + 1],
        mostLeftOfNumber,
        mostRightOfNumber,
        number.value
      )
      if (resultAdd1) {
        number.valid = true
      }
    }

    if (number.valid === null) {
      number.valid = false
    }

    return number
  })
}

export const checkNumberOnLine = (line: string, start: number, end: number, value: number) => {
  if (line === undefined) return false
  const newLine = line.slice(start, end)
  console.log(start, end)
  console.log(line, value, newLine, newLine.length)
  if (newLine.match(/[^. ]+/) === null) return false

  return true
}

export const day3 = () => {
  const lines = getLinesFromInput(__dirname(import.meta.url))

  const numbers = getNumbers(lines)
  const clearLines = clearNumbers(lines)
  const newNumbers = checkNumbers(numbers, clearLines)
}
