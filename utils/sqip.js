const { sqip } = require('sqip')
const { resolve } = require('path')

;(async () => {
  const pluginResults = await sqip({
    input: resolve(__dirname, '../src/images/originals'),
    output: resolve(__dirname, '../src/images/previews'),
  })
  console.log(pluginResults)
})()
