import format from './formatters/format.js'
import getTreeDiff from './formatters/getTreeDiff.js'
import getFileContent from './getFileContent.js'

export default function getDiff(filePath1, filePath2, outputFormat = 'stylish') {
  const data1 = getFileContent(filePath1)
  const data2 = getFileContent(filePath2)
  const tree = getTreeDiff(data1, data2)
  return format(tree, outputFormat)
}
