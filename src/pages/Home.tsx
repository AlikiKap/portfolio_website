import React from 'react'
import Banner from '../components/Banner'
import { Typography,Grid } from '@mui/material'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Banner/>
    <Grid
    container
    justifyContent="center"
    alignItems="center"
    flexDirection={"column"}
    style={{color:'white', textAlign:'center'}}>

    <Typography>
      Hi! I am a 4th year student and the only remaining part of my bachelor studies is practical training so I am currently activelely searching for an internship or a job as a junior front-end developer.
      <br/>
      
    </Typography>
    </Grid>
    <Footer/>
    </>
  )
}

export default Home