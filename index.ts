import inquirer from 'inquirer'

import y2023 from './source/2023/index.ts'

inquirer
  .prompt([
    {
      type: 'list',
      name: 'year',
      message: 'What year do you want to run?',
      choices: [2023],
    },
    {
      type: 'list',
      name: 'day',
      message: 'What day do you want to run?',
      choices: [1, 2, 3, 4],
    },
  ])
  .then(({ year, day }: { year: number; day: number }) => {
    switch (year) {
      case 2023:
        // @ts-ignore
        y2023[`day${day}`]()
        break
    }
  })
