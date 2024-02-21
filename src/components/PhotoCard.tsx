import InfoIcon from '@mui/icons-material/Info'
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material'

const PhotoCard = ({ photo }) => {
  return (
    <ImageListItem key={photo.img}>
      <img
        srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${photo.img}?w=248&fit=crop&auto=format`}
        alt={photo.title}
        loading='lazy'
      />
      <ImageListItemBar
        title={photo.title}
        subtitle={photo.author}
        actionIcon={
          <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${photo.title}`}>
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  )
}

export default PhotoCard
