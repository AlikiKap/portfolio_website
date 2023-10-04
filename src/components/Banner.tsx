import React from 'react'
import { Button, Grid, Link, Stack, Typography } from '@mui/material'
import avatar from './icon.png';


function Banner() {
  const linearGradientStyle = {
    background: 'linear-gradient(to right, #2e013e, #4a6314)',
    width: '100%',
    paddingInline: '10%'
  };
  return (
    <div style={linearGradientStyle}>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        color="#D45BFF"
      >
        <div style={{ width: '500px' }}>
          <Typography
            fontSize="24px"
            fontWeight="600"
          >
            Hello, my name is Aliki Kapasakalidi and I am a
            <mark
              style={{ background: "#BEFF34", borderRadius: '32px', paddingInline: '8px', marginInline: '8px' }}
            >
              full stack web developer
            </mark>
            searching for a place where I can expand my knowledge and skills while working on interesting and important projects with a team.
          </Typography>
          <Typography
            fontSize="24px"
            fontWeight="600"
          >
            Contact me:
          </Typography>
          <Link underline="always" style={{ color: '#BEFF34', fontSize: "24px", fontWeight: "400" }} href='mailto:aliki02.kapasakalidi@gmail.com'>aliki02.kapasakalidi@gmail.com</Link>
          <Button variant='outlined' style={{ border: '2px solid #BEFF34', color: 'white', fontSize: "18px", fontWeight: "400", margin: '12px' }} href='./CV_Aliki_Kapasakalidi.pdf' download>Download Resume</Button>
        </div>
        <img src={avatar} alt='avatar-picture' style={{ width: '400px', height: 'auto' }} />

      </Stack>
    </div>
  )
}

export default Banner