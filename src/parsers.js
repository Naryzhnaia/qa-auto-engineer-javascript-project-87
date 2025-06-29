import yaml from 'js-yaml'

export default function parse(fileType, fileContent) {
  switch (fileType) {
    case '.json':
      return JSON.parse(fileContent)
    case '.yaml':
    case '.yml':
      return yaml.load(fileContent)
    default:
      throw new Error(`Unknown type of file: '${fileType}'`)
  }
}
