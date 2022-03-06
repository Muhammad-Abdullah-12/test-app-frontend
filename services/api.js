import Fetcher from './fetcher'

const API = {
  getSearchResult(paramData) {
    return Fetcher.get('/search_service', paramData)
  },
}
export default API
