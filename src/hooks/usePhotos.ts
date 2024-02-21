import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import FetchPhotoResponse from '../entities/FetchPhotoResponse'
import Photo from '../entities/Photo'
import apiClient from '../services/apiClient'

const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient
      .get<FetchPhotoResponse>('/', {
        signal: controller.signal,
        params: { q: 'nature', image_type: 'photo' },
      })
      .then((res) => {
        setPhotos(res.data.hits)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { photos, error, isLoading }
}

export default usePhotos
