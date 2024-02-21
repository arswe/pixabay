import { ImageListItem } from '@mui/material'

const PhotoCard = ({ photo }) => {
  return (
    <ImageListItem>
      <img
        srcSet={`${photo.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${photo.img}?w=161&fit=crop&auto=format`}
        alt={photo.title}
        loading='lazy'
      />
    </ImageListItem>
  )
}

export default PhotoCard
