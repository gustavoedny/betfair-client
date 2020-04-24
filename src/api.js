const client = require('./client')

class Api {
  constructor (appKey, sessionToken = null, adapter = 'node') {
    this.appKey = appKey
    this.sessionToken = sessionToken
    this.client = client(adapter)
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

    return this.client.post(endpoint, payload, { headers: requestHeaders })
  }
}

module.exports = Api
