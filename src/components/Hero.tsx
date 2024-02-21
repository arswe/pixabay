import { Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material'
import HeroImage from './HeroImage'

export default function Hero() {
  return (
    <Box
      id='hero'
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component='h1'
            variant='h1'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Our latest&nbsp;
            <Typography
              component='span'
              variant='h1'
              sx={{
                color: (theme) => (theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'),
              }}
            >
              Products
            </Typography>
          </Typography>
          <Typography variant='body1' textAlign='center' color='text.secondary'>
            Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. <br />
            Elevate your experience with top-tier features and services.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf='center'
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id='outlined-basic'
              hiddenLabel
              size='small'
              variant='outlined'
              fullWidth
              placeholder='Your email address'
            />
            <Button variant='contained' color='primary'>
              Joint
            </Button>
          </Stack>
          <Typography variant='caption' textAlign='center' sx={{ opacity: 0.8 }}>
            By clicking &quot;Joint&quot; you agree to our&nbsp;
            <Link href='#' color='primary'>
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <HeroImage />
      </Container>
    </Box>
  )
}
