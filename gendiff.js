#!/usr/bin/env node

import { Command } from 'commander'
const program = new Command()
import genDiff from './formatters/index.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format: plain or json')
  .arguments('<filepath1> <filepath2>', 'files to compare')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format))
  })

program.parse()
