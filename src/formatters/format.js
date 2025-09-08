import formatStylish from './stylish.js'
import formatPlain from './plain.js'

const format = (tree, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return formatStylish(tree)
    case 'plain':
      return formatPlain(tree)
    case 'json':
      return JSON.stringify(tree, null, 0)
    default:
      throw new Error(`Unknown type of format: '${outputFormat}'`)
  }
}

export default format
