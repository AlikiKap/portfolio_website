import React from 'react'
import Banner from '../components/Banner'
import { Typography, Grid, Stack, Link } from '@mui/material'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Banner />
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
            Hi! I am a 4th year student and the only remaining part of my bachelor studies is practical training and thesis,
            therefore I am activelely searching for an internship or a job as a junior front-end developer.
          </Typography>
          <Typography fontSize='20px' lineHeight='1.7' marginTop='20px'>
            During my studies at the university, I have well mastered all the technologies and tools a front-end developer needs. I started getting into web development by learning <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>HTML</u>, <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>CSS</u>, and <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>JavaScript</u>, continued with <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>TypeScript</u>, and later with different frameworks they have, I work mostly with <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>React</u> but I am currently learning <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Angular</u> as well.
          </Typography>
          <Typography fontSize='20px' lineHeight='1.7' marginTop='20px'>
            All of the university projects were completed in teams (usually 3-4 students) and with strict project management using <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Agile</u> methodologies, <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>GitHub</u> Kanban system board and writing a daily report in Excel with counted hours of work and a description of what was done.
          </Typography>
          <Typography fontSize='20px' lineHeight='1.7' marginTop='20px'>
            Also, I am eager to become a full-stack developer, and at the moment I am trying my best to study everything needed for backend development. I already know some basics and can write simple programs in <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Java</u> and <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Python</u>, but that was not enough and with the knowledge I have now I can implement the backend using <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Node.js</u>, <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>Express.js</u> for the server and <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>PostgreSQL</u> or <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>mySQL</u> for the database.
          </Typography>
          <Typography fontSize='20px' lineHeight='1.7' marginTop='20px'>
            Aside from university projects, test tasks from componies and personal projects(
            <Link href='https://github.com/AlikiKap' color='#BEFF34'>See my projects on GitHub</Link>
            ), I also like to create <u style={{ textDecoration: 'underline', textDecorationColor: '#D45BFF' }}>UI/UX designs</u> (
            <Link href='https://www.behance.net/alikikapasakalidi' fontSize='20px' color='#BEFF34'> See my projects on Behance</Link>
            ) in my free time.
          </Typography>
        </Stack>
        <Footer />
      </Grid>
    </>
  )
}

export default Home