import axios from 'axios'
import Router from 'next/router'
import config from '../config'

const Axios = axios.create({
  baseURL: config.domain
})

class Fetcher {
  static get (route, params) {
    return this.xhr(route, params, 'GET')
  }

  static put (route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static patch (route, params) {
    return this.xhr(route, params, 'PATCH')
  }

  static post (route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete (route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static async xhr (route, params, verb) {
    const options = {
      method: verb
    }
    if (params) {
      if (verb === 'GET') {
        options.params = params
      } else {
        options.data = params
      }
    }

    Axios.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        const originalRequest = error.config
        if (error.response.status === 403 && !originalRequest._retry) {
          Router.push('/')
        }
        return Promise.reject(error)
      }
    )
    return Axios(route, options)
  }
}

export default Fetcher
