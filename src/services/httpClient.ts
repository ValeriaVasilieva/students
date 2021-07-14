import axios from 'axios'

import config from '../consts/appConfig'


const authToken = config.localStorage.authToken

export const http = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    'X-TOKEN': authToken
  }
})
