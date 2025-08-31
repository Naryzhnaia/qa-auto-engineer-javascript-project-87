import getDiffStylish from './stylish.js'
import getDiffPlain from './plain.js'
import getDiffJson from './json.js'

export default function format(tree, outputFormat) {
  switch (outputFormat) {
    case 'stylish':
      return getDiffStylish(tree)
    case 'plain':
      return getDiffPlain(tree)
    case 'json':
      return getDiffJson(tree)
    default:
      throw new Error(`Unknown type of format: '${outputFormat}'`)
  }
}
