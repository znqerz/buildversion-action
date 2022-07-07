import * as fs from 'fs'
import * as helper from './fs-helper'
import * as core from '@actions/core'

export function versionPropertiesSync(path: string, runNumber: string): string {
  if (helper.fileExistsSync(path)) {
    const numArray: string[] = []
    const file = fs.readFileSync(path, 'utf-8')
    const lines = file.split('\n')

    for (const line of lines) {
      if (line === '') {
        core.setFailed(`get empty line from file: ${path}`)
      }
      const number = line.toString().split('=').pop() || ''
      if (number.length === 0) {
        core.setFailed(`can not get correct build number, line data: ${line}`)
      }
      numArray.push(number)
    }

    return `${numArray.join('.')}_b${runNumber}`
  }

  return ''
}
