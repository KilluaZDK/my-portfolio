const { sqip } = require('sqip')
const { resolve } = require('path')
const { setupDir } = require('./setup-directory')

;(async () => {
  const input = resolve(__dirname, '../src/images/originals')
  const output = resolve(__dirname, '../src/images/previews')

  setupDir(output)

  const pluginResults = await sqip({
    input,
    output,
  })

  console.log(pluginResults)
})()
