import getDiffStylish from './stylish.js'
import getDiffPlain from './plain.js'
import getDiffJson from './json.js'
import getFileContent from '../getFileContent.js'
import parse from '../parsers.js'

export default function getFormatedDiff(filePath1, filePath2, format = 'stylish') {
  const object1 = parse(...getFileContent(filePath1))
  const object2 = parse(...getFileContent(filePath2))
  switch (format) {
    case 'stylish':
      return getDiffStylish(object1, object2)
    case 'plain':
      return getDiffPlain(object1, object2)
    case 'json':
      return getDiffJson(object1, object2)
    default:
      throw new Error(`Unknown type of format: '${format}'`)
  }
}
