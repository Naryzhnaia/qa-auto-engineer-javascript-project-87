import path from 'path'
import fs from 'fs'
import parse from './parsers.js'
import format from './formatters/format.js'
import getTreeDiff from './getTreeDiff.js'

const getFileContent = (filePath) => {
  const currentDir = process.cwd()
  const fullFilePath = path.resolve(currentDir, filePath)
  const fileContent = fs.readFileSync(fullFilePath)
  const fileType = path.extname(filePath).slice(1)
  return parse(fileType, fileContent)
}

const getDiff = (filePath1, filePath2, outputFormat = 'stylish') => {
  const data1 = getFileContent(filePath1)
  const data2 = getFileContent(filePath2)
  const tree = getTreeDiff(data1, data2)
  return format(tree, outputFormat)
}

export default getDiff
