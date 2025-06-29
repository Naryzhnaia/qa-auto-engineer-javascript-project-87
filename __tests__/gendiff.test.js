import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import genDiff from '../src/formatters/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = (filename) => {
  return path.join(__dirname, '..', '__fixtures__', filename)
}
const filePathJson1 = getFixturePath('json1.json')
const filePathJson2 = getFixturePath('json2.json')
const filePathYaml1 = getFixturePath('yaml1.yaml')
const filePathYaml2 = getFixturePath('yaml2.yaml')
const expectedResultStylish = fs.readFileSync(getFixturePath('expectedStylishFormat.txt'), 'utf-8')
const expectedResultJsonFormat = fs.readFileSync(getFixturePath('expectedJsonFormat.json'), 'utf-8')
const expectedResultPlainFormat = fs.readFileSync(getFixturePath('expectedPlainFormat.txt'), 'utf-8')

test.each([
  [filePathJson1, filePathJson2, '', expectedResultStylish],
  [filePathJson1, filePathJson2, 'stylish', expectedResultStylish],
  [filePathJson1, filePathJson2, 'plain', expectedResultPlainFormat],
  [filePathJson1, filePathJson2, 'json', expectedResultJsonFormat],
  [filePathYaml1, filePathYaml2, '', expectedResultStylish],
  [filePathYaml1, filePathYaml2, 'stylish', expectedResultStylish],
  [filePathYaml1, filePathYaml2, 'plain', expectedResultPlainFormat],
  [filePathYaml1, filePathYaml2, 'json', expectedResultJsonFormat],
])('genDiff(%s, %s, %s) returns expected result', (file1, file2, format, expected) => {
    expect(genDiff(file1, file2, format)).toEqual(expected)
  }
)
