import axios from 'axios'
import config from '@consts/appConfig'


export const http = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    'X-TOKEN': config.localStorage.authToken
  }
})
