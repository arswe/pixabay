import InfoIcon from '@mui/icons-material/Info'
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material'
import Photo from '../entities/Photo'

interface Props {
  photo: Photo
}

const PhotoCard = ({ photo }: Props) => {
  return (
    <ImageListItem key={photo.webformatURL}>
      <img
        srcSet={`${photo.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${photo.webformatURL}?w=248&fit=crop&auto=format`}
        alt={photo.tags}
        loading='lazy'
      />
      <ImageListItemBar
        title={photo.tags}
        subtitle={photo.user}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${photo.user}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  )
}

export default PhotoCard
