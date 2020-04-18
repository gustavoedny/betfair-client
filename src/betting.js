const endpoints = require('./endpoints')
const Api = require('./api')

class Betting extends Api {
  constructor (sessionToken, appKey) {
    super(appKey, sessionToken)
  }

  static factory(sessionToken, appKey) {
    return new Betting(sessionToken, appKey)
  }

  listEventTypes (filter, locale = 'en') {
    const endpoint = endpoints('listEventTypes')

    const payload = {
      filter,
      locale
    }

    return this.call(endpoint, payload)
  }

  listCompetitions (filter, locale = 'en') {
    const endpoint = endpoints('listCompetitions')

    const payload = {
      filter,
      locale
    }

    return this.call(endpoint, payload)
  }

  listTimeRanges (filter, granularity) {
    const endpoint = endpoints('listTimeRanges')

    const payload = {
      filter,
      granularity
    }

    return this.call(endpoint, payload)
  }

  listEvents (filter, locale = 'en') {
    const endpoint = endpoints('listEvents')

    const payload = {
      filter,
      locale
    }

    return this.call(endpoint, payload)
  }

  listMarketTypes (filter, locale = 'en') {
    const endpoint = endpoints('listMarketTypes')

    const payload = {
      filter,
      locale
    }

    return this.call(endpoint, payload)
  }

  listCountries (filter, locale = 'en') {
    const endpoint = endpoints('listCountries')

    const payload = {
      filter,
      locale
    }

    return this.call(endpoint, payload)
  }

  listVenues (filter, locale = 'en') {
    const endpoint = endpoints('listVenues')

    const payload = {
      filter,
      locale
    }

    return this.call(endpoint, payload)
  }

  listMarketCatalogue (filter, maxResults, marketProjection = {}, sort = '', locale = 'en') {
    const endpoint = endpoints('listMarketCatalogue')

    const payload = {
      filter,
      maxResults,
      marketProjection,
      sort,
      locale
    }

    return this.call(endpoint, payload)
  }

  listMarketBook (marketIds, options = {}) {
    const endpoint = endpoints('listMarketBook')

    const payload = {
      marketIds,
      ...options
    }

    return this.call(endpoint, payload)
  }

  listRunnerBook (marketId, selectionId, options = {}) {
    const endpoint = endpoints('listRunnerBook')

    const payload = {
      marketId,
      selectionId,
      ...options
    }

    return this.call(endpoint, payload)
  }

  listMarketProfitAndLoss (options = {}) {
    const endpoint = endpoints('listMarketProfitAndLoss')

    return this.call(endpoint, { ...options })
  }

  listCurrentOrders (options = {}) {
    const endpoint = endpoints('listCurrentOrders')

    return this.call(endpoint, { ...options })
  }

  listClearedOrders (options = {}) {
    const endpoint = endpoints('listClearedOrders')

    return this.call(endpoint, { ...options })
  }

  placeOrders (marketId, instructions, options = {}) {
    const endpoint = endpoints('placeOrders')

    const payload = {
      marketId,
      instructions,
      ...options
    }

    return this.call(endpoint, payload)
  }

  cancelOrders (options = {}) {
    const endpoint = endpoints('cancelOrders')

    const payload = {
      ...options
    }

    return this.call(endpoint, payload)
  }

  replaceOrders (marketId, instructions, options = {}) {
    const endpoint = endpoints('replaceOrders')

    const payload = {
      marketId,
      instructions,
      ...options
    }

    return this.call(endpoint, payload)
  }

  updateOrders (marketId, instructions, customerRef = '') {
    const endpoint = endpoints('updateOrders')

    const payload = {
      marketId,
      instructions,
      customerRef
    }

    return this.call(endpoint, payload)
  }
}

module.exports = Betting
