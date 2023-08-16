import React from 'react'
import {Grid, Stack, Typography} from '@mui/material'
import pfp from './icon.png'

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
        <div>
        <Typography 
        fontSize="24px"
        fontWeight="600"
        >
          Hello, my name is Aliki Kapasakalidi and I am a 
          <mark 
          style={{background:"#BEFF34",borderRadius:'32px',paddingInline:'8px', marginInline:'8px'}}
          >
            front-end developer 
          </mark> 
          searching for a place where I can:
</Typography>
<ul>
  <li>
  <Typography         
        fontSize="24px"
        fontWeight="600"
        >
        Work in a team
    </Typography>
  </li>
  <li>
  <Typography         
        fontSize="24px"
        fontWeight="600"
        >
      Learn new things everyday
    </Typography>
  </li>
  <li>
    <Typography         
        fontSize="24px"
        fontWeight="600"
        >
      Take part in working on interesting projects that solve real life problems
    </Typography>
  </li>
</ul>

        </div>
      <img src={pfp} alt='aaa' style={{ width: '700px', height: 'auto' }} />

      </Stack>
  </div>
  )
}

export default Banner