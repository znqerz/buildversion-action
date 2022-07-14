import * as fs from 'fs'

export function directoryExistsSync(path: string, required?: boolean): boolean {
  if (!path) {
    throw new Error("Arg 'path' must not be empty")
  }

  let stats: fs.Stats
  try {
    stats = fs.statSync(path)
    if (stats.isDirectory()) {
      return true
    } else if (!required) {
      return false
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Encountered an error when checking whether path '${path}' exists: ${error.message}`
      )
    }
  }

  throw new Error(`Directory '${path}' does not exist`)
}

export function existsSync(path: string): boolean {
  if (!path) {
    throw new Error("Arg 'path' must not be empty")
  }

  try {
    fs.statSync(path)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Encountered an error when checking whether path '${path}' exists: ${error.message}`
      )
    }
  }

  return true
}

export function fileExistsSync(path: string): boolean {
  if (!path) {
    throw new Error("Arg 'path' must not be empty")
  }

  let stats: fs.Stats
  try {
    stats = fs.statSync(path)
    if (!stats.isDirectory()) {
      return true
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Encountered an error when checking whether path '${path}' exists: ${error.message}`
      )
    }
  }

  return false
}
