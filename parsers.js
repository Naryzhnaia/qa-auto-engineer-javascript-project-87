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

export default (filePath) => {
  const fileType = path.extname(filePath)
  const fileContent = getFileContent(filePath)
  switch (fileType) {
    case '.json':
      return JSON.parse(fileContent)
    case '.yaml':
    case '.yml':
      return yaml.load(fileContent)
    default:
      throw new Error(`Unknown type of file: '${filePath}'`)
  }
}
