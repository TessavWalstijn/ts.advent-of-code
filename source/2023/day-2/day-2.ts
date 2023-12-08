import fs from 'fs'
import path from 'path'
import { __dirname } from '../../utils/dirname.ts'
import { getLinesFromInput } from '../../utils/getLinesFromInput.ts'

export const bag = {
  red: 12,
  green: 13,
  blue: 14,
}

export const getGames = (lines: string[]) =>
  lines
    .map((line) => generateGameObject(line))
    .filter((game) => game !== null) as unknown as tGame[]

export const possibleGamesAndSum = (games: tGame[]) => {
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
  return awnser
}

export const powerOfGame = ({ sets }: tGame) => {
  let minimumBag = {
    red: 0,
    green: 0,
    blue: 0,
  }

  sets.forEach((set) => {
    set.forEach((pull) => {
      const { color, amount } = pull

      switch (color) {
        case 'green':
          if (amount > minimumBag.green) {
            minimumBag.green = amount
          }
          break
        case 'blue':
          if (amount > minimumBag.blue) {
            minimumBag.blue = amount
          }
          break
        case 'red':
          if (amount > minimumBag.red) {
            minimumBag.red = amount
          }
          break
      }
    })
  })

  return minimumBag.green * minimumBag.blue * minimumBag.red
}

export const powerOfGamesToSum = (games: tGame[]) =>
  games
    .map((game) => powerOfGame(game))
    .reduce((p: number, n: number) => (p += n), 0)

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
  const lines = getLinesFromInput(__dirname(import.meta.url))
  const games = getGames(lines)
  possibleGamesAndSum(games)
  console.log(powerOfGamesToSum(games))
}
