import yaml from 'js-yaml'

const parse = (contentType, contentString) => {
  switch (contentType) {
    case 'json':
      return JSON.parse(contentString)
    case 'yaml':
    case 'yml':
      return yaml.load(contentString)
    default:
      throw new Error(`Unknown type: '${contentType}'`)
  }
}

export default parse 
