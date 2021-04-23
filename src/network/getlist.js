import axios from 'axios'

export function getlist(){
  return axios.create(
    {
      baseURL: 'https://api.github.com/phsix/blog/issues',
      method: 'GET',
    }
  )
}
