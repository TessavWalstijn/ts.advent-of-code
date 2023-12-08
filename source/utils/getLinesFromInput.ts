import fs from 'fs'
import path from 'path'

export const getLinesFromInput = (dir: string): string[] => {
  const input = fs.readFileSync(path.join(dir, '/input.txt'), 'utf8')

  return input.split('\n')
}
