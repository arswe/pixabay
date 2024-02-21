import { Alert, Stack } from '@mui/material'

const CustomAlert = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant='outlined' severity='error'>
        This is an outlined error Alert.
      </Alert>
    </Stack>
  )
}

export default CustomAlert
