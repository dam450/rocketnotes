import axios from 'axios'

const port =  ''
const proto = 'https'
const host =  'rocketnotes-api-npvt.onrender.com'

export const api = axios.create({
  baseURL: `${proto}://${host}`,
})
