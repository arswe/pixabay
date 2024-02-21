import { Box, MenuItem, Typography } from '@mui/material'

const LinkList = ({ setOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    const offset = 128
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset
      sectionElement.scrollIntoView({ behavior: 'smooth' })
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      })
      setOpen(false)
    }
  }
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <MenuItem onClick={() => scrollToSection('features')} sx={{ py: '6px', px: '12px' }}>
        <Typography variant='body2' color='text.primary'>
          Features
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => scrollToSection('testimonials')} sx={{ py: '6px', px: '12px' }}>
        <Typography variant='body2' color='text.primary'>
          Testimonials
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => scrollToSection('highlights')} sx={{ py: '6px', px: '12px' }}>
        <Typography variant='body2' color='text.primary'>
          Highlights
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => scrollToSection('pricing')} sx={{ py: '6px', px: '12px' }}>
        <Typography variant='body2' color='text.primary'>
          Pricing
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => scrollToSection('faq')} sx={{ py: '6px', px: '12px' }}>
        <Typography variant='body2' color='text.primary'>
          FAQ
        </Typography>
      </MenuItem>
    </Box>
  )
}

export default LinkList
