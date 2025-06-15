import getStandartDiff from './standart.js'
import getPlainDiff from './plain.js'
import getJsonDiff from './json.js'
import parse from '../parsers.js'

export default (filePath1, filePath2, format = 'standart') => {
  try {
    const object1 = parse(filePath1)
    const object2 = parse(filePath2)
    if (format === 'standart') {
      return getStandartDiff(object1, object2)
    } else if (format === 'plain') {
      return getPlainDiff(object1, object2)
    } else if (format === 'json') {
      return getJsonDiff(object1, object2)
    } else {
      return getStandartDiff(object1, object2)
    }
  } catch (e) {
    console.log(e.message)
  }
}
