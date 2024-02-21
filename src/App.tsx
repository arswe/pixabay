import { Box, CssBaseline, PaletteMode } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import ProjectsGrid from './layouts/ProjectsGrid'
import ToggleCustomTheme from './theme/ToggleCustomTheme'
import getLPTheme from './theme/theme'

const defaultTheme = createTheme({})

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark')
  const [showCustomTheme, setShowCustomTheme] = useState(true)
  const LPtheme = createTheme(getLPTheme(mode))

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
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
