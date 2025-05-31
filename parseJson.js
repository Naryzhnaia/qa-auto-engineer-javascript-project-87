import { cwd } from 'node:process'
import path from 'path'
import fs from 'fs'
//const { cwd } = require('node:process')
//const path = require('path')
//const fs = require('fs')

const getFileContent = (filePath) => {
  const currentDir = process.cwd()
  const fullFilePath = path.resolve(currentDir, filePath)
  const fileContent = fs.readFileSync(fullFilePath)
  return fileContent
}

const compareObjects = (object1, object2) => {
  let difference = ''
  for (const property in object1) {
    if (object2.hasOwnProperty(property)) {
      if (object1[property] === object2[property]) {
        difference = `${difference}\n${property} : ${object1[property]}`
      } else {
        difference = `${difference}\n - ${property} : ${object1[property]}`
        difference = `${difference}\n + ${property} : ${object2[property]}`
      }
    } else {
      difference = `${difference}\n - ${property} : ${object1[property]}`
    }
}
  return difference
}

export default (filePath1, filePath2) => {
  const fileContent1 = getFileContent(filePath1)
  const fileContent2 = getFileContent(filePath2)
  const object1 = JSON.parse(fileContent1)
  const object2 = JSON.parse(fileContent2)
  return compareObjects(object1, object2)
}