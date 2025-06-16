import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import genDiff from '../formatters/index.js'

let filePath1
let filePath2
let notJson
let filePathToYaml1
let filePathToYaml2
let expectedResultStandart
let expectedResultJsonFormat
let expectedResultPlainFormat

beforeAll(() => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
  filePath1 = getFixturePath('json1.json')
  filePath2 = getFixturePath('json2.json')
  notJson = getFixturePath('notJson.jpeg')
  filePathToYaml1 = getFixturePath('yaml1.yaml')
  filePathToYaml2 = getFixturePath('yaml2.yaml')
  expectedResultStandart = fs.readFileSync(getFixturePath('expectedStandartFormat.txt'), 'utf-8')
  expectedResultJsonFormat = fs.readFileSync(getFixturePath('expectedJsonFormat.json'), 'utf-8')
  expectedResultPlainFormat = fs.readFileSync(getFixturePath('expectedPlainFormat.txt'), 'utf-8')
})

describe('Сравниваем JSON-файлы', () => {
  test('Есть общий параметр c одинаковым значением', () => {
    expect(genDiff(filePath1, filePath2)).toMatch('age: 28')
  })

  test('Есть общий параметр c разными значениями', () => {
    expect(genDiff(filePath1, filePath2)).toMatch('- name: Anna')
    expect(genDiff(filePath1, filePath2)).toMatch('+ name: Alex')
  })

  test('Есть параметр только в первом файле', () => {
    expect(genDiff(filePath1, filePath2)).toMatch('- isMarried: true')
  })

  test('Есть параметр только во втором файле', () => {
    expect(genDiff(filePath1, filePath2)).toMatch('+ work: null')
  })

  test('Проверка результата целиком', () => {
    expect(genDiff(filePath1, filePath2)).toEqual(expectedResultStandart)
  })
})

describe('Сравниваем YAML-файлы', () => {
  test('Есть общий параметр c одинаковым значением', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('age: 28')
  })

  test('Есть общий параметр c разными значениями', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('- name: Anna')
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('+ name: Alex')
  })

  test('Есть параметр только в первом файле', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('- isMarried: true')
  })

  test('Есть параметр только во втором файле', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('+ work: null')
  })

  test('Проверка результата целиком', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toEqual(expectedResultStandart)
  })
})

describe('Вывод сравнения файлов в формате plain', () => {
  test('Есть общий параметр c разными значениями', () => {
    expect(genDiff(filePath1, filePath2, 'plain')).toMatch(
      `Property 'name' was updated. From Anna to Alex`
    )
  })

  test('Есть параметр только в первом файле', () => {
    expect(genDiff(filePath1, filePath2, 'plain')).toMatch(
      `Property 'isMarried' was removed`
    )
  })

  test('Есть параметр только во втором файле', () => {
    expect(genDiff(filePath1, filePath2, 'plain')).toMatch(
      `Property 'work' was added with value: null`
    )
  })

  test('Проверка результата целиком', () => {
    expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedResultPlainFormat)
  })
})

describe('Вывод сравнения файлов в формате json', () => {
  test('Сравниваем JSON-файлы: проверка результата целиком', () => {
    expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedResultJsonFormat)
  })

  test('Сравниваем YAML-файлы: проверка результата целиком', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2, 'json')).toEqual(expectedResultJsonFormat)
  })
})
