const axios = require('axios')

module.exports = (adapter = 'node') => {
  const client = axios.default.create({
    timeout: 5000
  })

  if (adapter === 'node') {
    client.defaults.adapter = require('axios/lib/adapters/http')
  } else {
    client.defaults.adapter = require('axios/lib/adapters/xhr')
  }

  return client
}