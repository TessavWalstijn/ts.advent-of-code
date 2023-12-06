import { dirname } from 'path'
import { fileURLToPath } from 'url'

export const __dirname = (url: string | URL) => dirname(fileURLToPath(url))
