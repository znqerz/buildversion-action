import * as core from '@actions/core'
import * as context from './context'
import * as buildNumber from './build-number'

async function run(): Promise<void> {
  try {
    const { filePath, runNumber } = context.getInputs()
    core.debug(filePath)
    const build = buildNumber.versionPropertiesSync(filePath, runNumber)

    core.debug(build)
    core.setOutput('build_number', build)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
