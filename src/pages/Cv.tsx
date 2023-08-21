import { CardContent, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'

function Cv() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection={"column"}
        style={{ color: 'white' }}>

        <Typography variant='h5' color='#D45BFF'>
          Aliki Kapasakalidi
        </Typography>
        <Typography variant='h5' color='#D45BFF'>
          Front-end Developer
        </Typography>
        <Card style={{ display: 'flex', flexDirection: 'column', background: '#212121', color: '#faffef', width: '50%', justifyContent: 'center', alignItems: 'center', lineHeight: '1.7', margin: '20px' }}>

          <Typography variant='h6' color='#D45BFF' textAlign='center'>
            Education:
          </Typography>
          <Typography textAlign='center'>
            Oulu University of Applied Sciences (OAMK)
            <br />
            Bachelor of Engineering, Information Technology
            <br />
            Oulu, Finland
            <br />
            2020 – Present

          </Typography>
          <Typography variant='h6' color='#D45BFF' textAlign='center'>
            Work Experience:
          </Typography>
          <Typography>
            29.12.2021 – 05.08.2021 – Book Illustrator
            <br />
            03.06.2022 – 01.08.2022 – Babysitter, Athens, Greece
            <br />
            04.08.2022 – 26.08.2022 – Waiter, “Café Boheme”, Athens, Greece
          </Typography>
          <Typography variant='h6' color='#D45BFF' textAlign='center'>
            Languages:
          </Typography>
          <Typography>
            English – Proficiency
            <br />
            Finnish – Beginner
            <br />
            Greek – Native
            <br />
            Russian – Native
          </Typography>
          <Typography variant='h6' color='#D45BFF' textAlign='center'>
            Skills:
          </Typography>
          <Typography>
            Agile
            Teamwork
            <Typography variant='h6' color='#D45BFF' textAlign='center'>
              Web development:
            </Typography>
            Git version control, Github
            <br />
            HTML & CSS
            <br />
            JavaScript
            <br />
            TypeScript
            <br />
            React.js
            <br />
            Node.js
            <br />
            Python
            <br />
            SQL
            <br />
            Java
            <Typography variant='h6' color='#D45BFF' textAlign='center'>
              Styles:
            </Typography>
            Bootstrap
            <br />
            SASS
            <br />
            MaterialUI
            <br />
            Tailwind
            <Typography variant='h6' color='#D45BFF' textAlign='center'>
              Design:
            </Typography>
            Figma
            <br />
            Wordpress
            <br />
            Axure RP

          </Typography>
          <Typography variant='h6' color='#D45BFF' textAlign='center'>
            Hobbies:
          </Typography>
          <Typography>
            Digital and traditional art, UI/UX design
          </Typography>

        </Card>
      </Grid>
      <Footer />
    </>
  )
}

export default Cv