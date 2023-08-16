import { Button, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


import React from 'react'

function Footer() {
  return (
    <>
    <Stack
            justifyContent="center"
            alignItems="center"
            flexDirection="row">
        <Button variant='contained' startIcon={<LinkedInIcon/>} style={{background: '#02659a', borderRadius: '32px'}} href='https://www.linkedin.com/in/aliki-kapasakalidi-921891203'>LINKEDIN</Button>
        <Button variant='contained' startIcon={<GitHubIcon/>} style={{background: '#8b31aa', borderRadius: '32px'}} href='https://github.com/AlikiKap '>GITHUB</Button>
    </Stack>
    </>
  )
}

export default Footer