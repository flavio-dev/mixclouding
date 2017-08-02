import 'whatwg-fetch'

const checkStatus = (response) => {
  console.log('response.status', response.status)
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export const whatwgFetch = (url, options) => {
  return fetch(url, options)
    .then(checkStatus)
}

export default whatwgFetch
