import axios from 'axios'

export default axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    api_key: '42493300-555c9a42a17d9b717de5e9c96',
  },
})
