const { join } = require('path')
// use synchronous version, just for local development
const { existsSync, mkdirSync, readdirSync, statSync, rmdirSync, unlinkSync } = require('fs')

const emptyDir = (path) => {
  const files = readdirSync(path)

  if (files.length) {
    files.forEach((filename) => {
      const fullPath = join(path, filename)
      if (statSync(fullPath).isDirectory()) {
        if (readdirSync(fullPath).length) emptyDir(fullPath)
        rmdirSync(fullPath)
      } else {
        unlinkSync(fullPath)
      }
    })
  } else {
    console.log(`No files found in ${path}`)
  }
}

const setupDir = (path) => {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true })
    return
  }
  emptyDir(path)
}

module.exports = {
  setupDir,
}
