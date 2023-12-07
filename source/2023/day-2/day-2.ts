import fs from 'fs'
import path from 'path'
import { __dirname } from '../../utils/dirname.ts'

export const bag = {
  red: 12,
  green: 13,
  blue: 14,
}

export const possibleGamesAndSum = (lines: string[]) => {
  const games = lines
    .map((line) => generateGameObject(line))
    .filter((game) => game !== null) as unknown as tGame[]

  let awnser = 0

  games.forEach(({ gameId, sets }) => {
    if (sets === null) return
    const correct = sets
      .map((set) => (isSetAccepted(set) ? 1 : 0))
      .reduce((p: number, n: number) => (p += n), 0)

    if (correct === sets.length) {
      awnser += gameId
    }
  })

  console.log(awnser)
}

type tGame = {
  gameId: number
  sets: tSet[][]
}

type tSet = {
  color: 'green' | 'blue' | 'red'
  amount: number
}

export const isSetAccepted = (set: tSet[]) => {
  const valids = set.map(({ color, amount }) => {
    switch (color) {
      case 'green':
        return amount <= bag.green
      case 'blue':
        return amount <= bag.blue
      case 'red':
        return amount <= bag.red
    }
  })

  let totalValid = true
  valids.forEach((valid) => {
    if (valid === false) {
      totalValid = false
    }
  })

  return totalValid
}

const generateGameObject = (line: string): tGame | null => {
  const match = line.match(/Game (\w{2}|\w{1})/)
  if (match === null) return null
  const gameId = Number(match[1])

  const sets = line
    .replace(/Game (\w{2}|\w{1}): /, '')
    .split('; ')
    .map(
      (cubes) =>
        cubes
          .split(', ')
          .map((cube) => {
            const cubeMatch = cube.match(/(\w{2}|\w{1}) (red|blue|green)/)
            if (cubeMatch === null) return null
            const color = cubeMatch[2] as tSet['color']
            const amount = Number(cubeMatch[1])
            return {
              color,
              amount,
            } as tSet
          })
          .filter((cube) => cube !== null) as tSet[],
    ) as tSet[][]

  return {
    gameId,
    sets,
  }
}

export const day2 = () => {
  const input = fs.readFileSync(
    path.join(__dirname(import.meta.url), '/input.txt'),
    'utf8',
  )

  const lines = input.split('\n')
  possibleGamesAndSum(lines)
}