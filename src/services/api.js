import axios from 'axios'

const port =  '3333'
const host =  '127.0.0.1'

export const api = axios.create({
  baseURL: `http://${host}:${port}`,
})
