import React from 'react'
import Banner from '../components/Banner'
import { Typography, Grid, Stack, Link } from '@mui/material'
import Footer from '../components/Footer'

function Home() {
  
  return (
    <>
      <Banner/>
      <Footer/>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection={"column"}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          flexDirection={"column"}
          style={{ color: '#faffef', textAlign: 'center', width: '50%', margin: '4%' }}>

          <Typography fontSize='20px' lineHeight='1.7' marginTop='20px'>
            Hi! For the past 2 years I was working at MUFG in Limassol, Cyprus, where I completed my internship and continued working as a Junior Data Engineer.
          </Typography>
          <Typography fontSize='20px' lineHeight='1.7' marginTop='20px'>
            During my work there, I have well mastered many of the technologies and tools a data engineer needs. My day-to-day work included designing, implementing and maintaining <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>ETL Pipelines</u>, preparing advanced filtering queries with <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>PostgreSQL</u> and <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>RegEx</u>, writing scripts  to validate and transform data in <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Python</u>, and writing documentation and release notes for every task using <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Confluence</u> and <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Jira</u> for ticket management.
          </Typography>
          <Typography fontSize='20px' lineHeight='1.7' marginTop='20px'>
            I am eager to become better at working with data and keep learning new tools that were not used in my work, and at the moment I am trying to study and improve my data engineering skills in my free time.
          </Typography>
          <Typography fontSize='20px' lineHeight='1.7' marginTop='20px'>
            Aside from work and previously done university projects, test tasks from componies and personal projects(
            <Link href='https://github.com/AlikiKap' color='#BEFF34'>See my projects on GitHub</Link>
            ), I also like to create <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>UI/UX designs</u> (
            <Link href='https://www.behance.net/alikikapasakalidi' fontSize='20px' color='#BEFF34'> See my projects on Behance</Link>
            ) in my free time.
          </Typography>
        </Stack>
      </Grid>
    </>
  )
}

export default Home