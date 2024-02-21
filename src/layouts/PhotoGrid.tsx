import { Container, Grid, ImageList } from '@mui/material'
import PhotoCard from '../components/PhotoCard'

const PhotoGrid = () => {
  const photos = [1, 2, 3]
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
          <Grid item xs={4} key={index}>
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
