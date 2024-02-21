import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
interface Photo {
  id: number
  user: string
  tags: string
}

interface FetchPhotoResponse {
  total: number
  totalHits: number
  hits: Photo[]
}

const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [error, setError] = useState(null)

  useEffect(() => {
    apiClient
      .get<FetchPhotoResponse>('/', { params: { q: 'nature', image_type: 'photo' } })
      .then((response) => setPhotos(response.data.hits))
      .catch((err) => setError(err.message))
  }, [])

  return { photos, error }
}

export default usePhotos
