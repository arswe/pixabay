import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { ToggleCustomThemeProps } from '../entities/ToggleCustomThemeProps'

const ToggleCustomTheme = ({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) => {
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

export default ToggleCustomTheme
