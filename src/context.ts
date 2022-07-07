import * as core from '@actions/core'

export interface Inputs {
  filePath: string
  runNumber: string
}

export function getInputs(): Inputs {
  return {
    filePath: core.getInput('file-path'),
    runNumber: core.getInput('run-number')
  }
}
