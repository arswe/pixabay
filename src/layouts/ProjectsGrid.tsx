import { Container, Grid } from '@mui/material'
import ProjectCard from '../components/ProjectCard'

const ProjectsGrid = () => {
  const projects = [1, 2, 3]
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
        {projects.map((project, index) => (
          <Grid item xs={4} key={index}>
            <ProjectCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProjectsGrid
