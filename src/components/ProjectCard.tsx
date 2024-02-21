import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const ProjectCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component='img' image='https://picsum.photos/500/300?random=4' alt='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            title
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Github
        </Button>
        <Button size='small' color='primary'>
          Live
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard
