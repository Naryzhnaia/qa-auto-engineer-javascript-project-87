import getStylishDiff from './stylish.js'
import getPlainDiff from './plain.js'
import getJsonDiff from './json.js'
import getFileContent from '../getFileContent.js'
import parse from '../parsers.js'

export default (filePath1, filePath2, format = 'stylish') => {
  const object1 = parse(...getFileContent(filePath1))
  const object2 = parse(...getFileContent(filePath2))
  switch (format) {
    case 'stylish':
      return getStylishDiff(object1, object2)
    case 'plain':
      return getPlainDiff(object1, object2)
    case 'json':
      return getJsonDiff(object1, object2)
    default:
      throw new Error(`Unknown type of format: '${format}'`)
  }
}
