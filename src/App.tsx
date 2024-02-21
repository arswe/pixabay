import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { Box, CssBaseline, PaletteMode, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import ProjectsGrid from './layouts/ProjectsGrid'
import getLPTheme from './theme/theme'

const defaultTheme = createTheme({})

interface ToggleCustomThemeProps {
  showCustomTheme: boolean
  toggleCustomTheme: () => void
}

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: '1rem',
      }}
    >
      <ToggleButtonGroup
        color='primary'
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label='Platform'
        sx={{ backgroundColor: 'background.default', '& .Mui-selected': { pointerEvents: 'none' } }}
      >
        <ToggleButton value>
          <WbSunnyRoundedIcon sx={{ fontSize: '1rem', mr: 1 }} />
          Dark
        </ToggleButton>
        <ToggleButton value={false}>
          <ModeNightRoundedIcon sx={{ fontSize: '1rem', mr: 1 }} />
          Light
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark')
  const [showCustomTheme, setShowCustomTheme] = useState(true)
  const LPtheme = createTheme(getLPTheme(mode))

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  // this function is used to toggle between the default theme and the custom theme
  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev)
  }
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />

      <Box sx={{ bgcolor: 'background.default' }}>
        <ProjectsGrid />
      </Box>
      <Footer />
      <ToggleCustomTheme showCustomTheme={showCustomTheme} toggleCustomTheme={toggleCustomTheme} />
    </ThemeProvider>
  )
}

export default App
