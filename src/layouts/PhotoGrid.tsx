import { Container, Grid, ImageList } from '@mui/material'
import { useEffect, useState } from 'react'
import PhotoCard from '../components/PhotoCard'
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

const PhotoGrid = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [error, setError] = useState(null)

  useEffect(() => {
    apiClient
      .get<FetchPhotoResponse>('/', { params: { q: 'nature', image_type: 'photo' } })
      .then((response) => setPhotos(response.data.hits))
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <div>Error: {error}</div>

  console.log(photos)

  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Grid container spacing={2}>
        {photos?.map((photo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <ImageList variant='woven'>
              <PhotoCard photo={photo} />
            </ImageList>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PhotoGrid
