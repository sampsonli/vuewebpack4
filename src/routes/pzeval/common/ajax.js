import axios from 'axios'

const _axios = axios.create({
  baseURL: 'http://172.16.211.87:8100',
  timeout: 1000
})

export const get = function (url, token) {
  return _axios.get(url, {
    headers: {
      token
    }
  }).then((response) => {
    if (response.status === 200) {
      return response.data
    }
    throw new Error(response.message)
  })
}
export const post = function (url, args) {
  return _axios.post(url, args, {
    headers: { token: args.token }
  }).then((response) => {
    if (response.status === 200) {
      return response.data
    }
    throw new Error(response.message)
  })
}
