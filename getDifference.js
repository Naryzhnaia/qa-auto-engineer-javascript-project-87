import { cwd } from 'node:process'
import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import yaml from 'js-yaml'

const getFileContent = (filePath) => {
  const currentDir = process.cwd()
  const fullFilePath = path.resolve(currentDir, filePath)
  const fileContent = fs.readFileSync(fullFilePath)
  return fileContent
}

const getDifference = (object1, object2) => {
  const propObject1 = Object.keys(object1)
  const propObject2 = Object.keys(object2)
  const properties = _.union(propObject1, propObject2)
  let difference = ''
  for (const property of properties) {
    if (object1.hasOwnProperty(property) && object2.hasOwnProperty(property)) {
      if (object1[property] === object2[property]) {
        difference = `${difference}\n   ${property} : ${object1[property]}`
      } else {
        difference = `${difference}\n - ${property} : ${object1[property]}`
        difference = `${difference}\n + ${property} : ${object2[property]}`
      }
    }
    if (
      object1.hasOwnProperty(property) === true &&
      object2.hasOwnProperty(property) === false
    ) {
      difference = `${difference}\n - ${property} : ${object1[property]}`
    }
    if (
      object1.hasOwnProperty(property) === false &&
      object2.hasOwnProperty(property) === true
    ) {
      difference = `${difference}\n + ${property} : ${object2[property]}`
    }
  }
  return `{${difference}\n}`
}

export default (filePath1, filePath2) => {
  // if (!filePath1.includes('.json')) {
  //   throw new Error(`'${filePath1}' is not JSON`)
  // }
  // if (!filePath2.includes('.json')) {
  //   throw new Error(`'${filePath2}' is not JSON`)
  // }
  const fileContent1 = getFileContent(filePath1)
  const fileContent2 = getFileContent(filePath2)
  let object1
  let object2
  if (filePath1.endsWith('.json') && filePath2.endsWith('.json')) {
    object1 = JSON.parse(fileContent1)
    object2 = JSON.parse(fileContent2)
  }

  if (filePath1.endsWith('.yaml') && filePath2.endsWith('.yaml')) {
    object1 = yaml.load(fileContent1)
    object2 = yaml.load(fileContent2)
  }
  return getDifference(object1, object2)
}
