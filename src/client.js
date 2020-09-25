const axios = require('axios')

module.exports = (adapter = 'node') => {
  return axios.default.create({
    timeout: 5000,
    adapter: adapter === 'node'
        ? require('axios/lib/adapters/http')
        : require('axios/lib/adapters/xhr')
  })
}