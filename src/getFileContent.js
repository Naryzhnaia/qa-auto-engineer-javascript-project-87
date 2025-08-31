import path from 'path'
import fs from 'fs'
import parse from './parsers.js'

export default function getFileContent(filePath) {
  const currentDir = process.cwd()
  const fullFilePath = path.resolve(currentDir, filePath)
  const fileContent = fs.readFileSync(fullFilePath)
  const fileType = path.extname(filePath).slice(1)
  return parse(fileType, fileContent)
}
