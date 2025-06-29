import path from 'path'
import fs from 'fs'

export default function getFileContent(filePath) {
  const currentDir = process.cwd()
  const fullFilePath = path.resolve(currentDir, filePath)
  const fileContent = fs.readFileSync(fullFilePath)
  const fileType = path.extname(filePath)
  return [fileType, fileContent]
}
