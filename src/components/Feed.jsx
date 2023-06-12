import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sm: 'column', md: 'row' } }}>
      <Box sx={
        {
          height: { sm: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sm: 0, md: 2 }
        }
      } >
        <Sidebar />
        <Typography
          className='copyright'
          variant='body2'
          sx={{
            mt: 1.5,
            color: '#fff'
          }}
        >
          Copyright 2023 Youtube clone
        </Typography>
      </Box>
      <Box p={2} sx={{
        overflow: 'auto',
        height: '90vh',
        flex: 2
      }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          New <span style={{ color: '#F31503' }} >Videos</span>
        </Typography>

        <Videos></Videos>
      </Box>
    </Stack>
  )
}

export default Feed