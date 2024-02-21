import { Container, Grid, ImageList } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PhotoCard from '../components/PhotoCard'


const PhotoGrid = () => {
  const { photos, setPhotos } = useState([])

  useEffect(() => {
    const response = axios.get('/api/photos')
    const data = response.data
    setPhotos(data)
  }, [])

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
        {photos.map((photo, index) => (
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
