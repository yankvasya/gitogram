import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequest = ({
  url, method = 'get', data = {}, withBaseUrl = true, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL: withBaseUrl ? baseURL : '',
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`,
    ...headers
  }
})
