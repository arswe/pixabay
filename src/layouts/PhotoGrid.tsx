import { Container, Grid, ImageList, Typography } from '@mui/material'
import usePhotos from '../hooks/usePhotos'

const PhotoGrid = () => {
  const { photos, error, isLoading } = usePhotos()

  if (error) return <div>Error: {error}</div>

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
      {isLoading && <Typography variant='h4'>Loading...</Typography>}
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
