const IDENTITY_DEFAULT = 'https://identitysso.betfair.com'
const IDENTITY_AU = 'https://identitysso.betfair.au'
const IDENTITY_IT = 'https://identitysso.betfair.it'
const IDENTITY_ES = 'https://identitysso.betfair.es'
const IDENTITY_RO = 'https://identitysso.betfair.ro'
const IDENTITY_SE = 'https://identitysso.betfair.se'

const AUTH = {
  login: {
    default: IDENTITY_DEFAULT + '/api/login',
    au: IDENTITY_AU + '/api/login',
    it: IDENTITY_IT + '/api/login',
    es: IDENTITY_ES + '/api/login',
    ro: IDENTITY_RO + '/api/login',
    se: IDENTITY_SE + '/api/login'
  },
  keepAlive: {
    default: IDENTITY_DEFAULT + '/api/keepAlive',
    au: IDENTITY_AU + '/api/keepAlive',
    it: IDENTITY_IT + '/api/keepAlive',
    es: IDENTITY_ES + '/api/keepAlive',
    ro: IDENTITY_RO + '/api/keepAlive',
    se: IDENTITY_SE + '/api/keepAlive'
  },
  logout: {
    default: IDENTITY_DEFAULT + '/api/logout'
  }
}

const BETTING_BASE_URL = 'https://api.betfair.com/exchange/betting/rest/v1.0/'

const BETTING = {
  listEventTypes: {
    default: BETTING_BASE_URL + 'listEventTypes/'
  },
  listCompetitions: {
    default: BETTING_BASE_URL + 'listCompetitions/'
  },
  listTimeRanges: {
    default: BETTING_BASE_URL + 'listTimeRanges/'
  },
  listEvents: {
    default: BETTING_BASE_URL + 'listEvents/'
  },
  listMarketTypes: {
    default: BETTING_BASE_URL + 'listMarketTypes/'
  },
  listCountries: {
    default: BETTING_BASE_URL + 'listCountries/'
  },
  listVenues: {
    default: BETTING_BASE_URL + 'listVenues/'
  },
  listMarketCatalogue: {
    default: BETTING_BASE_URL + 'listMarketCatalogue/'
  },
  listMarketBook: {
    default: BETTING_BASE_URL + 'listMarketBook/'
  },
  listRunnerBook: {
    default: BETTING_BASE_URL + 'listRunnerBook/'
  },
  listMarketProfitAndLoss: {
    default: BETTING_BASE_URL + 'listMarketProfitAndLoss/'
  },
  listCurrentOrders: {
    default: BETTING_BASE_URL + 'listCurrentOrders/'
  },
  listClearedOrders: {
    default: BETTING_BASE_URL + 'listClearedOrders/'
  },
  placeOrders: {
    default: BETTING_BASE_URL + 'placeOrders/'
  },
  cancelOrders: {
    default: BETTING_BASE_URL + 'cancelOrders/'
  },
  replaceOrders: {
    default: BETTING_BASE_URL + 'replaceOrders/'
  },
}

const ENDPOINTS = {
  ...AUTH,
  ...BETTING
}

module.exports = (name, locale = 'default') => {
  if (!ENDPOINTS[name] || !ENDPOINTS[name][locale]) {
    throw new Error('Betfair Client: Invalid endpoint name or locale, please read the docs')
  }

  return ENDPOINTS[name][locale]
}
