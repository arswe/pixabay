import axios from 'axios'

export default axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: process.env.REACT_APP_PIXABAY_API_KEY,
  },
})
