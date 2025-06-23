import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import genDiff from '../bin/index.js'

let filePath1
let filePath2
let filePathToYaml1
let filePathToYaml2
let expectedResultStylish
let expectedResultJsonFormat
let expectedResultPlainFormat
let formats

beforeAll(() => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const getFixturePath = (filename) => {
    return path.join(__dirname, '..', '__fixtures__', filename)
  }
  filePath1 = getFixturePath('json1.json')
  filePath2 = getFixturePath('json2.json')
  filePathToYaml1 = getFixturePath('yaml1.yaml')
  filePathToYaml2 = getFixturePath('yaml2.yaml')
  console.log(`fixture path - ${filePath1} ${filePath2} ${filePathToYaml1}`)
  expectedResultStylish = fs.readFileSync(getFixturePath('expectedStylishFormat.txt'), 'utf-8')
  expectedResultJsonFormat = fs.readFileSync(getFixturePath('expectedJsonFormat.json'), 'utf-8')
  expectedResultPlainFormat = fs.readFileSync(getFixturePath('expectedPlainFormat.txt'), 'utf-8')
  formats = [['stylish', expectedResultStylish], ['plain', expectedResultPlainFormat], ['json', expectedResultJsonFormat]]
})

describe('Вывод сравнения файлов без указания формата', () => {
  test('Сравниваем JSON-файлы: проверка результата целиком', () => {
    expect(genDiff(filePath1, filePath2)).toEqual(expectedResultStylish)
  })

  test('Сравниваем YAML-файлы: проверка результата целиком', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toEqual(expectedResultStylish)
  })
})

describe('Вывод сравнения файлов в разных форматах: stylish, plain, json', () => {
  test('Сравниваем JSON-файлы: проверка результата целиком', () => {
    formats.forEach(([format, result]) => {
      expect(genDiff(filePath1, filePath2, format)).toEqual(result)
    })
  })

  test('Сравниваем YAML-файлы: проверка результата целиком', () => {
    formats.forEach(([format, result]) => {
      expect(genDiff(filePathToYaml1, filePathToYaml2, format)).toEqual(result)
    })
  })
})
