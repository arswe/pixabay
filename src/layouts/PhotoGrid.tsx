import { Container, Grid, ImageList, Typography } from '@mui/material'
import usePhotos from '../hooks/usePhotos'

const PhotoGrid = () => {
  const { photos, error } = usePhotos()

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
        {photos?.map((photo) => (
          <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={photo.id}>
            <ImageList variant='woven'>
              <Typography variant='h6' align='center'>
                {photo.user}
              </Typography>
            </ImageList>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PhotoGrid
