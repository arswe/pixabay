import { Container, Grid, ImageList } from '@mui/material'
import PhotoCard from '../components/PhotoCard'

const PhotoGrid = () => {
  const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
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
