const axios = require('axios')

class Api {
  constructor (appKey, sessionToken = null) {
    this.appKey = appKey
    this.sessionToken = sessionToken
  }

  setSessionToken (token) {
    this.sessionToken = token

    return this
  }

  call (endpoint, payload = {}, headers = {}) {
    const requestHeaders = {
      'Accept': 'application/json',
      'X-Application': this.appKey,
      ...headers
    }

    if (this.sessionToken) {
      requestHeaders['X-Authentication'] = this.sessionToken
    }

    return axios.post(endpoint, payload, { headers: requestHeaders })
  }
}

module.exports = Api
