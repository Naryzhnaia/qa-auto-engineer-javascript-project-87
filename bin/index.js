import getStylishDiff from '../src/formatters/stylish.js'
import getPlainDiff from '../src/formatters/plain.js'
import getJsonDiff from '../src/formatters/json.js'
import parse from '../src/parsers.js'

export default (filePath1, filePath2, format = 'stylish') => {
  try {
    const object1 = parse(filePath1)
    const object2 = parse(filePath2)
    if (format === 'stylish') {
      return getStylishDiff(object1, object2)
    }
    else if (format === 'plain') {
      return getPlainDiff(object1, object2)
    }
    else if (format === 'json') {
      return getJsonDiff(object1, object2)
    }
    else {
      return getStylishDiff(object1, object2)
    }
  }
  catch (e) {
    console.log(e.message)
  }
}
