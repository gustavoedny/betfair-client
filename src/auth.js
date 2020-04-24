const client = require('./client')
const endpoints = require('./endpoints')
const queryString = require('querystring')

const defaultConfig = {
  locale: 'default'
}

class Auth {
  constructor (config = {}, adapter = 'node') {
    this.config = {...defaultConfig, ...config}
    this.client = client(adapter)
  }

  static factory(config = {}) {
    return new Auth(config)
  }

  login (username, password, appKey) {
    const endpoint = endpoints('login', this.config.locale)
    const form = queryString.stringify({
      username,
      password
    })
    const headers = {
      'X-Application': appKey,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.client.post(endpoint, form, { headers })
  }

  keepAlive (sessionToken, appKey = null) {
    const endpoint = endpoints('keepAlive', this.config.locale)
    const headers = {
      'X-Authentication': sessionToken,
      'Accept': 'application/json',
    }

    if (appKey) {
      headers['X-Application'] = appKey
    }

    return this.client.post(endpoint, {}, { headers })
  }

  logout (sessionToken, appKey = null) {
    const endpoint = endpoints('logout', this.config.locale)
    const headers = {
      'X-Authentication': sessionToken,
      'Accept': 'application/json',
    }

    if (appKey) {
      headers['X-Application'] = appKey
    }

    return this.client.post(endpoint, {}, { headers })
  }
}

module.exports = Auth
