<template lang="md">
# Lessons Learned

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```javascript
const LayerServerless = require('@layerhq/serverless-common')

const config = require('./layer_config.json')
const layerServerless = new LayerServerless(config)

exports.process = (event, context, callback) => {
  try {
    const webhook = layerServerless.webhook(event.headers, event.body)
    // webhook payload

    callback(null, { statusCode: 200 })
  } catch (err) {
    callback(err)
  }
}
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<style lang="stylus"></style>