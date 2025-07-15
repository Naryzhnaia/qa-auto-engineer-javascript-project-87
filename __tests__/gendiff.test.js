import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import genDiff from '../src/formatters/index.js'
import stylish from '../src/formatters/stylish.js'
import plain from '../src/formatters/plain.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = (filename) => {
  return path.join(__dirname, '..', '__fixtures__', filename)
}

const fileTypes = ['json', 'yaml']
const expectedResultStylish = fs.readFileSync(getFixturePath('expectedStylishFormat.txt'), 'utf-8')
const expectedResultJsonFormat = fs.readFileSync(getFixturePath('expectedJsonFormat.json'), 'utf-8')
const expectedResultPlainFormat = fs.readFileSync(getFixturePath('expectedPlainFormat.txt'), 'utf-8')

// test.each([
//   [filePathJson1, filePathJson2, 'stylish', expectedResultStylish],
//   [filePathJson1, filePathJson2, 'plain', expectedResultPlainFormat],
//   [filePathJson1, filePathJson2, 'json', expectedResultJsonFormat],
//   [filePathYaml1, filePathYaml2, 'stylish', expectedResultStylish],
//   [filePathYaml1, filePathYaml2, 'plain', expectedResultPlainFormat],
//   [filePathYaml1, filePathYaml2, 'json', expectedResultJsonFormat],
// ])('genDiff(%s, %s, %s) returns expected result', (file1, file2, format, expected) => {
//   expect(genDiff(file1, file2, format)).toEqual(expected)
// })

test.each(fileTypes)('genDiff %s returns expected result', (fileFormat) => {
  const filePath1 = getFixturePath(`file1.${fileFormat}`)
  const filePath2 = getFixturePath(`file2.${fileFormat}`)
  expect(genDiff(filePath1, filePath2)).toEqual(expectedResultStylish)
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedResultStylish)
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedResultPlainFormat)
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedResultJsonFormat)
})
