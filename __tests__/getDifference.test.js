import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import genDiff from '../getDifference.js'

let filePath1
let filePath2
let expectedResult
let notJson
let filePathToYaml1
let filePathToYaml2

beforeAll(() => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
    filePath1 = getFixturePath('json1.json')
    filePath2 = getFixturePath('json2.json')
    notJson = getFixturePath('notJson.jpeg')
    filePathToYaml1 = getFixturePath('yaml1.yaml')
    filePathToYaml2 = getFixturePath('yaml2.yaml')
    expectedResult = fs.readFileSync(getFixturePath('expectedString.txt'), 'utf-8')
})

describe('Сравниваем JSON-файлы', () => {
test('Есть общий параметр c одинаковым значением', () => {
    expect(genDiff(filePath1, filePath2)).toMatch('age : 28')
})

test('Есть общий параметр c разными значениями', () => {
    expect(genDiff(filePath1, filePath2)).toMatch('- name : Anna')
    expect(genDiff(filePath1, filePath2)).toMatch('+ name : Alex')
})

test('Есть параметр только в первом файле', () => {
    expect(genDiff(filePath1, filePath2)).toMatch('- isMarried : true')
})

test('Есть параметр только во втором файле', () => {
    expect(genDiff(filePath1, filePath2)).toMatch('+ work : null')
})

test('Проверка результата целиком', () => {
    //expect(genDiff(filePath1, filePath2)).toEqual(expectedResult)    
    expect(genDiff(filePath1, filePath2)).toBe(`{
 - name : Anna
 + name : Alex
   age : 28
 - isMarried : true
 + work : null
}`)
})
})

describe('Сравниваем YAML-файлы', () => {
test('Есть общий параметр c одинаковым значением', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('age : 28')
})

test('Есть общий параметр c разными значениями', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('- name : Anna')
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('+ name : Alex')
})

test('Есть параметр только в первом файле', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('- isMarried : true')
})

test('Есть параметр только во втором файле', () => {
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toMatch('+ work : null')
})

test.only('Проверка результата целиком', () => {   
    expect(genDiff(filePathToYaml1, filePathToYaml2)).toBe(`{
 - name : Anna
 + name : Alex
   age : 28
 - isMarried : true
 + work : null
}`)
})
})
