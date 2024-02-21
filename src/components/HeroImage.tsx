import { Box, alpha } from '@mui/material'
import heroDark from '../assets/hero-dark.png'
import heroLight from '../assets/hero-light.png'

const HeroImage = () => {
  return (
    <Box
      id='image'
      sx={(theme) => ({
        mt: { xs: 8, sm: 10 },
        alignSelf: 'center',
        height: { xs: 200, sm: 700 },
        width: '100%',
        backgroundImage: theme.palette.mode === 'light' ? `url(${heroLight})` : `url(${heroDark})`,
        backgroundSize: 'cover',
        borderRadius: '10px',
        outline: '1px solid',
        outlineColor: theme.palette.mode === 'light' ? alpha('#BFCCD9', 0.5) : alpha('#9CCCFC', 0.1),
        boxShadow:
          theme.palette.mode === 'light'
            ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
            : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
      })}
    />
  )
}

export default HeroImage
