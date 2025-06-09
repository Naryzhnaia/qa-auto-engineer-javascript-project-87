import { cwd } from 'node:process'
import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

const getFileContent = (filePath) => {
  const currentDir = process.cwd()
  const fullFilePath = path.resolve(currentDir, filePath)
  const fileContent = fs.readFileSync(fullFilePath)
  return fileContent
}

export default (filePath1, filePath2) => {
  //Может добавить свитч-кейс по типу файла?
  const fileContent1 = getFileContent(filePath1)
  const fileContent2 = getFileContent(filePath2)
  let object1
  let object2
  if (filePath1.endsWith('.json') && filePath2.endsWith('.json')) {
    object1 = JSON.parse(fileContent1)
    object2 = JSON.parse(fileContent2)
  }

  if (filePath1.endsWith('.yaml') && filePath2.endsWith('.yaml')) {
    object1 = yaml.load(fileContent1)
    object2 = yaml.load(fileContent2)
  }
  return [object1, object2]
}
