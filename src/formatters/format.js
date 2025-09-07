import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

const format = (tree, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return formatStylish(tree)
    case 'plain':
      return formatPlain(tree)
    case 'json':
      return formatJson(tree)
    default:
      throw new Error(`Unknown type of format: '${outputFormat}'`)
  }
}

export default format
