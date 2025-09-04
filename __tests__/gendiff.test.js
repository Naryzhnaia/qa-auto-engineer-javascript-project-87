import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (filename) => {
  return path.join(__dirname, '..', '__fixtures__', filename)
}

const readFixture = (filename) => {
  return fs.readFileSync(path.join(__dirname, '..', '__fixtures__', filename), 'utf-8')
}

const fileTypes = ['json', 'yaml']

test.each(fileTypes)('genDiff %s returns expected result', (fileFormat) => {
  const filePath1 = getFixturePath(`file1.${fileFormat}`)
  const filePath2 = getFixturePath(`file2.${fileFormat}`)
  expect(genDiff(filePath1, filePath2)).toEqual(readFixture('expectedStylishFormat.txt'))
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(readFixture('expectedStylishFormat.txt'))
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(readFixture('expectedPlainFormat.txt'))
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(readFixture('expectedJsonFormat.json'))
})
