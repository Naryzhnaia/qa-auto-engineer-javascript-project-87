import getStandartDiff from './standart.js'
import getPlainDiff from './plain.js'
import parse from '../parsers.js'

export default (filePath1, filePath2, format = 'standart') => {
  const [object1, object2] = parse(filePath1, filePath2)
  if (format === 'standart') {
    return getStandartDiff(object1, object2)
  } else if (format === 'plain') {
    return getPlainDiff(object1, object2)
  } else {
    throw new Error(`Unknown format '${format}'`)
  }
}
