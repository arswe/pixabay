import axios from 'axios'
import { API_KEY, API_URL } from '../constants/constants'

export default axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
})
