import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (filename) => {
  return path.join(__dirname, '..', '__fixtures__', filename)
}

const fileTypes = ['json', 'yaml']
const expectedResultStylish = fs.readFileSync(getFixturePath('expectedStylishFormat.txt'), 'utf-8')
const expectedResultJsonFormat = fs.readFileSync(getFixturePath('expectedJsonFormat.json'), 'utf-8')
const expectedResultPlainFormat = fs.readFileSync(getFixturePath('expectedPlainFormat.txt'), 'utf-8')

test.each(fileTypes)('genDiff %s returns expected result', (fileFormat) => {
  const filePath1 = getFixturePath(`file1.${fileFormat}`)
  const filePath2 = getFixturePath(`file2.${fileFormat}`)
  expect(genDiff(filePath1, filePath2)).toEqual(expectedResultStylish)
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedResultStylish)
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedResultPlainFormat)
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedResultJsonFormat)
})
