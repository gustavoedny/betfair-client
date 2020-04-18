const axios = require('axios')
const endpoints = require('./endpoints')

const defaultConfig = {
  locale: 'default'
}

class Auth {
  constructor (config = {}) {
    this.config = {...defaultConfig, ...config}
  }

  static build(config = {}) {
    return new Auth(config)
  }

  login (username, password, appKey) {
    const endpoint = endpoints('login', this.config.locale)
    const form = {
      username,
      password
    }
    const headers = {
      'X-Application': appKey,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return axios.post(endpoint, form, { headers })
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

    return axios.post(endpoint, {}, { headers })
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

    return axios.post(endpoint, {}, { headers })
  }
}

module.exports = Auth
